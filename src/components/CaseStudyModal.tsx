import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "../data/projects";
import { ArrowUpRight, Github } from "./Icons";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

const METRIC_ACCENTS = ["lime", "yellow", "lilac"] as const;

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const sheetBodyRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const isOpen = Boolean(project?.caseStudy);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const prevHtmlOverflow = html.style.overflowY;
    const prevBodyPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflowY = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (sheetBodyRef.current) {
      sheetBodyRef.current.scrollTop = 0;
    }

    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      html.style.overflowY = prevHtmlOverflow;
      body.style.paddingRight = prevBodyPadding;
      if (window.scrollY !== scrollY) {
        window.scrollTo({ top: scrollY, behavior: "instant" });
      }
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setCopied(false);
  }, [project?.slug]);

  if (!project || !project.caseStudy || typeof document === "undefined") {
    return null;
  }

  const { caseStudy } = project;
  const titleParts = project.title.split(" ");
  const titleLead = titleParts.length > 1 ? titleParts.slice(0, -1).join(" ") : "";
  const titleAccent = titleParts.length > 1 ? titleParts[titleParts.length - 1] : project.title;

  const handleCopyShareLink = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("case", project.slug);
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return createPortal(
    <div
      className="case-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-notebook-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article className="case-notebook">
        <header className="case-notebook-bar">
          <div className="case-notebook-bar-left">
            <span className="case-notebook-pill">
              <i aria-hidden="true" /> Mini Case Study
            </span>
            <span className="case-notebook-eyebrow">{project.eyebrow}</span>
          </div>
          <div className="case-notebook-bar-actions">
            <button
              type="button"
              className="case-share-btn"
              onClick={handleCopyShareLink}
              aria-label="Copy shareable link to this case study"
            >
              {copied ? "Copied ✓" : "Share"}
            </button>
            <button
              type="button"
              ref={closeButtonRef}
              className="case-close-btn"
              onClick={onClose}
              aria-label="Close case study"
            >
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>
        </header>

        <div className="case-notebook-scroll" ref={sheetBodyRef}>
          <div className="case-notebook-hero">
            <div className="case-notebook-heading">
              <span className="case-number-stamp">{project.number}</span>
              <h2 id="case-notebook-title">
                {titleLead ? (
                  <>
                    {titleLead} <em>{titleAccent}</em>
                  </>
                ) : (
                  project.title
                )}
              </h2>
              <p className="case-notebook-subtitle">{caseStudy.subtitle}</p>
            </div>

            <div className="case-notebook-actions">
              <a
                className="button button-dark"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <span className="live-dot" aria-hidden="true" />
                Live demo <ArrowUpRight />
              </a>
              <a className="case-outline-btn" href={project.code} target="_blank" rel="noreferrer">
                <Github /> GitHub repo
              </a>
              {project.extraLinks?.map((extra) => (
                <a
                  key={extra.url}
                  className="case-outline-btn"
                  href={extra.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github /> {extra.label}
                </a>
              ))}
            </div>

            <dl className="case-meta-strip">
              <div className="case-meta-cell">
                <dt>Role</dt>
                <dd>{caseStudy.role}</dd>
              </div>
              <div className="case-meta-cell">
                <dt>Context</dt>
                <dd>{caseStudy.context}</dd>
              </div>
              <div className="case-meta-cell">
                <dt>Focus area</dt>
                <dd>{caseStudy.focus}</dd>
              </div>
            </dl>
          </div>

          {project.image && (
            <figure className="case-stage-frame">
              <div className="case-stage-window">
                <div className="window-bar">
                  <i />
                  <i />
                  <i />
                  <span>{project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                </div>
                <img
                  src={project.image}
                  alt={`${project.title} interactive classroom preview`}
                  className="case-stage-img"
                />
              </div>
            </figure>
          )}

          <section className="case-metrics-row" aria-label="Project highlights">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={metric.value}
                className={`case-metric-tile metric-${METRIC_ACCENTS[index % METRIC_ACCENTS.length]}`}
              >
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </div>
            ))}
          </section>

          <div className="case-chapters">
            {caseStudy.sections.map((section) => (
              <section className="case-chapter" key={section.eyebrow}>
                <div className="case-chapter-rail">
                  <span className="eyebrow">{section.eyebrow}</span>
                </div>
                <div className="case-chapter-body">
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="case-chapter-list">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <section className="case-tech-band" aria-label="Tools and technologies used">
            <p className="eyebrow">Tools &amp; technologies used</p>
            <div className="case-tech-pills">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          <aside className="case-takeaway-banner">
            <span className="case-takeaway-star" aria-hidden="true">
              ✦
            </span>
            <p className="eyebrow">Key takeaway</p>
            <blockquote>“{caseStudy.takeaway}”</blockquote>
          </aside>
        </div>
      </article>
    </div>,
    document.body,
  );
}
