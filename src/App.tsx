import { useState } from "react";

type IconProps = { className?: string };

function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Github({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 22v-3.9c.04-1-.35-1.97-1.1-2.65 3.6-.4 7.38-1.77 7.38-8A6.24 6.24 0 0 0 19.62 3a5.8 5.8 0 0 0-.16-4s-1.3-.42-4.46 1.66a15.3 15.3 0 0 0-8 0C3.84-1.42 2.54-1 2.54-1a5.8 5.8 0 0 0-.16 4A6.24 6.24 0 0 0 .72 7.5c0 6.22 3.78 7.58 7.38 8-.74.67-1.13 1.63-1.1 2.62V22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19c-3 .92-3-1.5-4.2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedIn({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 9v10M7 5.5v.01M11 19v-5.5A4.5 4.5 0 0 1 15.5 9h0a3.5 3.5 0 0 1 3.5 3.5V19M11 13V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Menu({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    eyebrow: "Numeracy development",
    title: "The Teachers",
    description:
      "A learning resource that turns foundational numeracy concepts into a clear, friendly digital experience for young learners.",
    tags: ["Learning design", "HTML", "CSS"],
    live: "https://maamjofas1.netlify.app/",
    code: "https://github.com/Dmjm99125/theteachers",
    variant: "yellow",
  },
  {
    number: "02",
    eyebrow: "Early childhood education",
    title: "Ma’am Jo’s Classroom",
    description:
      "A thoughtful course project for EDUECE10, designed to organize classroom ideas and make educational content feel welcoming.",
    tags: ["Early learning", "HTML", "CSS"],
    live: "https://maamjofasmaganda1.netlify.app/",
    code: "https://github.com/Dmjm99125/maamjofasmaganda",
    variant: "lilac",
  },
];

const stack = [
  { name: "HTML", detail: "Semantic foundations", mark: "< >" },
  { name: "CSS", detail: "Responsive experiences", mark: "{ }" },
  { name: "JavaScript", detail: "Interactive learning", mark: "JS" },
  { name: "React", detail: "Component systems", mark: "R" },
  { name: "TanStack Start", detail: "Full-stack React apps", mark: "TS" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
              <a className="text-link" href="#about">
                More about me <span>↓</span>
              </a>
            </div>
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
            {projects.map((project) => (
              <article className={`project-card project-${project.variant}`} key={project.title}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
                <div className="project-preview">
                  {project.variant === "yellow" ? (
                    <div className="math-sheet">
                      <span className="mini-label">Let’s count!</span>
                      <strong>4 + 3 = ?</strong>
                      <div className="dots">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  ) : (
                    <div className="class-sheet">
                      <div>
                        <span>Learn</span>
                        <span>Play</span>
                        <span>Grow</span>
                      </div>
                      <strong>
                        Every little step
                        <br />
                        is a big discovery.
                      </strong>
                      <div className="rainbow">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="code-link" href={project.code} target="_blank" rel="noreferrer">
                      <Github /> Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
    </div>
  );
}
