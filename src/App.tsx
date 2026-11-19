import { useState } from "react";
import CaseStudyModal from "./components/CaseStudyModal";
import { ArrowUpRight, FileText, Github, LinkedIn, Menu } from "./components/Icons";
import { education, teachingFocus, workExperience } from "./data/background";
import { projects } from "./data/projects";

// When your resume is ready, add the PDF to `public/resume.pdf` and set this to `"/resume.pdf"` (or an external link).
const RESUME_URL: string | null = null;

function getInitialCaseSlug() {
  if (typeof window === "undefined") {
    return null;
  }
  const slug = new URLSearchParams(window.location.search).get("case");
  return projects.some((project) => project.slug === slug && project.caseStudy) ? slug : null;
}

const stack = [
  { name: "HTML", detail: "Semantic foundations", mark: "< >" },
  { name: "CSS", detail: "Responsive experiences", mark: "{ }" },
  { name: "JavaScript", detail: "Interactive learning", mark: "JS" },
  { name: "React", detail: "Component systems", mark: "R" },
  { name: "TanStack Start", detail: "Full-stack React apps", mark: "TS" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCaseSlug, setActiveCaseSlug] = useState<string | null>(getInitialCaseSlug);
  const [futureCaseSlug, setFutureCaseSlug] = useState<string | null>(null);
  const [resumeNoticeOpen, setResumeNoticeOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const syncCaseParam = (slug: string | null) => {
    if (typeof window === "undefined") {
      return;
    }
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set("case", slug);
    } else {
      url.searchParams.delete("case");
    }
    window.history.replaceState({}, "", url.toString());
  };

  const openCaseStudy = (slug: string) => {
    setActiveCaseSlug(slug);
    syncCaseParam(slug);
  };

  const closeCaseStudy = () => {
    setActiveCaseSlug(null);
    syncCaseParam(null);
  };

  const activeCaseProject =
    projects.find((project) => project.slug === activeCaseSlug && project.caseStudy) ?? null;

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Donna Mesina home">
          donna<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu className="icon" />
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <div className="status-pill">
              <span /> Available for edtech collaborations
            </div>
            <h1 className="hero-name">
              <span>I’m Donna</span>
              <br />
              <span>May J. Mesina</span>
            </h1>
            <p className="hero-lede">
              An early childhood educator and edtech developer building thoughtful learning
              experiences and approachable digital classrooms using <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
              <strong>TanStack Start</strong>.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                See my work <ArrowUpRight />
              </a>
              {RESUME_URL ? (
                <a
                  className="button button-outline"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText /> Resume <ArrowUpRight />
                </a>
              ) : (
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => setResumeNoticeOpen((open) => !open)}
                  aria-expanded={resumeNoticeOpen}
                >
                  <FileText /> Resume
                </button>
              )}
              <a className="text-link" href="#about">
                More about me <span>↓</span>
              </a>
            </div>
            {!RESUME_URL && resumeNoticeOpen && (
              <p className="hero-resume-note" role="status">
                Resume is currently being finalized — check back soon or{" "}
                <a href="#contact">get in touch</a>.
              </p>
            )}
          </div>

          <div className="hero-visual" aria-label="A code editor displaying Donna's portrait">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span>Donna.tsx</span>
              </div>
              <div className="portrait-code">
                <code>
                  <span>
                    &lt;<mark>img</mark> src=<s>"/image.jpg"</s> alt=<s>"Donna"</s> /&gt;
                  </span>
                </code>
                <div className="portrait-output">
                  <div className="portrait-placeholder" aria-hidden="true">
                    <span>DM</span>
                    <small>
                      Add portrait to
                      <br />
                      public/image.jpg
                    </small>
                  </div>
                  <img
                    src="/image.jpg"
                    alt="Donna May J. Mesina"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="float-tag tag-html">HTML</span>
            <span className="float-tag tag-css">CSS</span>
            <span className="float-tag tag-js">JS</span>
            <span className="float-tag tag-react">React</span>
            <span className="float-tag tag-tanstack">TanStack Start</span>
            <div className="spark spark-one">✦</div>
            <div className="spark spark-two">✦</div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Projects with
                <br />
                <em>purpose.</em>
              </h2>
            </div>
            <p>Small, thoughtful experiences where code meets the classroom.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const shotWindow = project.image ? (
                <div className="project-shot-window">
                  <div className="window-bar">
                    <i />
                    <i />
                    <i />
                    <span>{project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  </div>
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                </div>
              ) : null;

              return (
                <article
                  className={`project-card project-${project.variant}${project.featured ? " project-featured" : ""}`}
                  key={project.slug}
                >
                  <div className="project-top">
                    <div className="project-top-meta">
                      <span>{project.number}</span>
                      {project.caseStudy && (
                        <span className="project-case-tag">Flagship · Mini case study</span>
                      )}
                    </div>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      title={`Open ${project.title} live demo`}
                    >
                      <span className="live-dot" aria-hidden="true" /> Live demo <ArrowUpRight />
                    </a>
                  </div>

                  <div className={project.featured ? "project-featured-body" : ""}>
                    {shotWindow && (
                      <button
                        type="button"
                        className="project-preview project-preview-button"
                        onClick={() => {
                          if (project.caseStudy) {
                            openCaseStudy(project.slug);
                          } else {
                            setFutureCaseSlug((current) =>
                              current === project.slug ? null : project.slug,
                            );
                          }
                        }}
                        aria-expanded={
                          project.caseStudy ? undefined : futureCaseSlug === project.slug
                        }
                        aria-label={
                          project.caseStudy
                            ? `Read mini case study for ${project.title}`
                            : `Case study status for ${project.title}`
                        }
                      >
                        {shotWindow}
                        <span
                          className={`project-preview-pill${
                            project.caseStudy ? "" : " project-preview-pill-upcoming"
                          }`}
                        >
                          {project.caseStudy ? (
                            <>
                              Read mini case study <ArrowUpRight />
                            </>
                          ) : (
                            "Case study · Future update"
                          )}
                        </span>
                      </button>
                    )}

                    <div className="project-copy">
                      <p className="eyebrow">{project.eyebrow}</p>
                      {project.caseStudy ? (
                        <h3>
                          <button
                            type="button"
                            className="project-title-trigger"
                            onClick={() => openCaseStudy(project.slug)}
                          >
                            {project.title}
                          </button>
                        </h3>
                      ) : (
                        <h3>{project.title}</h3>
                      )}
                      <p>{project.description}</p>
                      {!project.caseStudy && futureCaseSlug === project.slug && (
                        <p className="project-case-note" role="status">
                          Mini case study for {project.title} is planned for a future update.
                        </p>
                      )}

                      <div className="project-footer">
                        <div className="tag-list">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <div className="project-links-row">
                          <a
                            className="code-link"
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github /> Code
                          </a>
                          {project.extraLinks?.map((extra) => (
                            <a
                              key={extra.url}
                              className="code-link"
                              href={extra.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github /> {extra.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-intro">
            <p className="eyebrow">About me</p>
            <h2>
              Two crafts.
              <br />
              <em>One purpose.</em>
            </h2>
            <p>
              Teaching and coding are both acts of care: listening closely, making the complex feel
              simple, and creating space for someone to grow.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card coding-card">
              <div className="card-icon">{"</>"}</div>
              <p className="eyebrow">The coding side</p>
              <h3>I turn ideas into clear, approachable products.</h3>
              <p>
                My developer mindset helps me break big challenges into small, testable steps — the
                same way I guide a learner through a new concept.
              </p>
              <ul>
                <li>
                  <span>01</span> Thoughtful user experiences
                </li>
                <li>
                  <span>02</span> Clean, responsive interfaces
                </li>
                <li>
                  <span>03</span> Learning by building
                </li>
              </ul>
            </article>

            <article className="about-card teaching-card">
              <div className="image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=1200&h=900"
                  alt="A teacher guiding children as they draw together at a classroom table"
                />
                <span>
                  Joyful learning,
                  <br />
                  every day.
                </span>
              </div>
              <p className="eyebrow">The teaching side</p>
              <h3>I meet learners where they are.</h3>
              <p>
                As an ESL and early childhood educator, I build confidence through patience, play,
                and experiences that make every child feel seen.
              </p>
              <div className="mini-tags">
                <span>ESL</span>
                <span>Early childhood</span>
                <span>Inclusive learning</span>
              </div>
            </article>
          </div>
        </section>

        <section className="stack section" id="stack">
          <div className="stack-heading">
            <p className="eyebrow">My toolkit</p>
            <h2>
              Tools I use to
              <br />
              <em>make ideas real.</em>
            </h2>
          </div>
          <div className="stack-list">
            {stack.map((item, index) => (
              <div className="stack-row" key={item.name}>
                <span className="stack-index">0{index + 1}</span>
                <span className="stack-mark">{item.mark}</span>
                <strong>{item.name}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">Work experience</p>
              <h2>
                Teaching in
                <br />
                <em>practice.</em>
              </h2>
            </div>
            <p>
              Education-focused roles and instructional practice supporting young learners and
              English language students.
            </p>
          </div>

          <div className="experience-list">
            {workExperience.map((item) => (
              <article className="experience-card" key={`${item.role}-${item.organization}`}>
                <div className="experience-meta">
                  <span className="experience-index">{item.number} · Role</span>
                  <span className="period-pill">
                    <i aria-hidden="true" /> {item.period}
                  </span>
                </div>
                <div className="experience-body">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-org">{item.organization}</p>
                  </div>
                  <div className="experience-details">
                    <p>{item.description}</p>
                    <div className="tag-list">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="focus-block">
            <p className="eyebrow focus-label">Teaching focus</p>
            <div className="focus-grid">
              {teachingFocus.map((focus) => (
                <article className="focus-card" key={focus.title}>
                  <span className="focus-index">{focus.number}</span>
                  <h3>{focus.title}</h3>
                  <p>{focus.description}</p>
                  <div className="tag-list">
                    {focus.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section" id="education">
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">Education</p>
              <h2>
                Learning the
                <br />
                <em>craft.</em>
              </h2>
            </div>
            <p>Academic foundations bridging computing technology and early childhood education.</p>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article
                className={`education-card education-${item.accent}`}
                key={`${item.period}-${item.degree}`}
              >
                <div className="education-top">
                  <span className="education-index">{item.number}</span>
                  <span className="period-pill">{item.period}</span>
                </div>
                <h3>{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-description">{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">Let’s connect</p>
            <h2>
              Have an idea for
              <br />
              better learning?
            </h2>
            <p>
              I’d love to hear about your school, product, classroom challenge, or creative
              collaboration.
            </p>
            <a className="email-link" href="mailto:mesinadm32@gmail.com">
              mesinadm32@gmail.com <ArrowUpRight />
            </a>
            <div className="social-links">
              <a href="https://github.com/Dmjm99125" target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
              <a
                href="https://ph.linkedin.com/in/donna-mesina-314a03354"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn /> LinkedIn
              </a>
              <a href="https://www.facebook.com/Dmjmesina" target="_blank" rel="noreferrer">
                Facebook <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="contact-decoration" aria-hidden="true">
            <span className="smile">◡</span>
            <span className="contact-star star-a">✦</span>
            <span className="contact-star star-b">✦</span>
            <span className="contact-star star-c">✦</span>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          donna<span>.</span>
        </a>
        <p>Designed with care. Built with curiosity.</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      <CaseStudyModal project={activeCaseProject} onClose={closeCaseStudy} />
    </div>
  );
}
