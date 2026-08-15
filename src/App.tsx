import { useScrollSpy } from './hooks/useScrollSpy'
import { BokehBackground } from './components/BokehBackground/BokehBackground'
import './App.css'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']
const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact']

const credibility = ['B.Tech CSE', 'Python', 'SQL', 'Data Analytics', 'Streamlit', 'Problem Solving']

const experience = [
  {
    period: '2023 — 2027',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'AKTU, Kanpur',
    details: [
      'Final-year Computer Science student with a strong foundation in Python, SQL, and software problem solving.',
      'Currently building practical technical depth in data analysis, dashboarding, and structured software workflows.',
    ],
    stack: ['Python', 'SQL', 'OOP', 'Data Structures'],
  },
  {
    period: 'Ongoing',
    title: 'Data Analytics & Python Projects',
    company: 'Independent work',
    details: [
      'Developed an interactive profitability dashboard using Python, Pandas, Plotly, and Streamlit for business analysis.',
      'Built a citizen issue reporting platform concept centered on structured data collection, issue categorization, and monitoring.',
    ],
    stack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
  },
  {
    period: 'Growth path',
    title: 'Aspiring Data Professional',
    company: 'Analytics + product thinking',
    details: [
      'Focused on improving analytical thinking, dashboard development, and data-driven decision support through real-world projects.',
      'Strengthening technical fundamentals in Python, SQL, and visual storytelling while preparing for data-focused roles.',
    ],
    stack: ['SQL', 'Data Analysis', 'Visualization', 'GitHub'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Product Line Profitability & Margin Performance Dashboard',
    blurb: 'Built an interactive dashboard to analyze profitability and margin performance for a distributor workflow.',
    problem: 'Profitability decisions needed clearer visibility into product performance and margin trends.',
    solution: 'Used Python, Pandas, Plotly, and Streamlit to clean and transform data, explore patterns, and surface actionable business insights.',
    stack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    link: 'https://github.com/shivanshiawasthi/Nassau-Profitability-Analysis',
  },
  {
    number: '02',
    title: 'CivicPulse – Citizen Issue Reporting Platform',
    blurb: 'A data-driven civic platform concept for reporting, categorizing, and tracking public issues.',
    problem: 'Issue reporting needs structured data collection and faster visibility into patterns and status.',
    solution: 'Developing a platform grounded in civic data workflows, structured issue handling, and dashboard-based monitoring.',
    stack: ['Python', 'SQL', 'Data Collection', 'Monitoring'],
    link: '#contact',
  },
  {
    number: '03',
    title: 'System Optimization Project',
    blurb: 'Developed an optimized solution that reduced processing time by 30% using Python.',
    problem: 'System performance bottlenecks can slow decision-making and reduce efficiency.',
    solution: 'Applied structured logic and optimization thinking to improve runtime and streamline execution.',
    stack: ['Python', 'Optimization', 'Problem Solving'],
    link: '#contact',
  },
]

const analyticsBlocks = [
  { label: 'Programming', items: ['Python', 'C', 'C++'] },
  { label: 'Data', items: ['SQL', 'Pandas', 'Plotly'] },
  { label: 'Tools', items: ['Streamlit', 'Jupyter', 'VS Code'] },
  { label: 'Core', items: ['DSA', 'OOP', 'DBMS'] },
]

const technologyGroups = {
  Languages: ['Python', 'SQL', 'C', 'C++'],
  Data: ['Pandas', 'Plotly', 'Jupyter Notebook'],
  Tools: ['Streamlit', 'Git', 'GitHub', 'VS Code'],
  Concepts: ['Data Structures', 'Problem Solving', 'OOP', 'DBMS'],
}

const profileMetrics = [
  { label: 'Current', value: 'Final Year' },
  { label: 'Specialty', value: 'Python' },
  { label: 'Direction', value: 'Data' },
]

function App() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="portfolio-shell">
      <BokehBackground />
      <div className="topographic topographic-one" aria-hidden="true" />
      <div className="topographic topographic-two" aria-hidden="true" />

      <header className="topbar">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Home">
            <span className="brand-mark">S</span>
            <span>Shivanshi Awasthi</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <a 
                  key={item} 
                  href={`#${id}`}
                  className={isActive ? 'nav-link active' : 'nav-link'}
                  data-active={isActive}
                >
                  {item}
                </a>
              )
            })}
          </div>

          <a href="#contact" className="nav-cta button button-primary">
            Let&apos;s Connect
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section container">
          <div className="hero-copy">
            <p className="eyebrow">CSE • PYTHON • DATA ANALYTICS</p>
            <h1>
              Shivanshi Awasthi.
              <span>Building with Python and data.</span>
            </h1>
            <p className="lede">
              Final-year B.Tech Computer Science student focused on Python, SQL, data analysis,
              and dashboard-driven problem solving with a growing interest in data-focused roles.
            </p>

            <div className="cta-row">
              <a href="#projects" className="button button-primary">
                View My Work
              </a>
              <a href="/resume.txt" download className="button button-secondary">
                Download Resume
              </a>
            </div>

            <div className="hero-meta" aria-label="Profile summary">
              {profileMetrics.map((metric) => (
                <div key={metric.label} className="meta-pill">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>

            <div className="scroll-indicator" aria-label="Scroll to explore">
              <span>Scroll</span>
              <span className="scroll-line" aria-hidden="true" />
            </div>
          </div>

          <div className="hero-visual" aria-label="Professional portrait frame">
            <div className="portrait-shell">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-frame">
                <div className="portrait-visual portrait-image">
                  <img src="/WhatsApp Image 2026-08-15 at 2.29.39 PM.jpeg" alt="Shivanshi Awasthi" className="portrait-img" />
                  <div className="portrait-badge">Python • Data</div>
                </div>
              </div>

              <div className="floating-card card-top">
                <span>Focus</span>
                <strong>Analytics</strong>
              </div>

              <div className="floating-card card-bottom">
                <span>Build</span>
                <strong>Dashboards</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="credibility-strip container" aria-label="Profile highlights">
          {credibility.map((item) => (
            <div key={item} className="credibility-item">
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section container about-section">
          <div className="section-header">
            <p className="kicker">About</p>
            <h2>Analytical thinker with a strong foundation in Python, SQL, and data-driven problem solving.</h2>
          </div>

          <div className="about-grid">
            <div className="about-statement">
              I turn raw data into insights and practical product thinking.
            </div>

            <div className="about-copy">
              <p>
                I am a final-year B.Tech Computer Science student with a strong foundation in Python and SQL,
                and a growing focus on data cleaning, exploratory data analysis, visualization, and dashboard development.
              </p>
              <p>
                My work is centered on transforming messy data into meaningful business insights while continuing to
                strengthen my technical foundation in data structures, problem solving, and software engineering.
              </p>
            </div>
          </div>

          <div className="meta-grid">
            <div className="meta-card">
              <label>Education</label>
              <strong>B.Tech CSE, AKTU | CGPA 7.4</strong>
            </div>
            <div className="meta-card">
              <label>Focus</label>
              <strong>Python • SQL • Data Analytics</strong>
            </div>
            <div className="meta-card">
              <label>Currently learning</label>
              <strong>EDA • Dashboarding • Product thinking</strong>
            </div>
            <div className="meta-card">
              <label>Direction</label>
              <strong>Data analyst / data professional roles</strong>
            </div>
          </div>
        </section>

        <section id="experience" className="section container experience-section">
          <div className="section-header">
            <p className="kicker">Experience</p>
            <h2>Technical growth with a practical, career-focused direction.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-head">
                    <div>
                      <p className="period">{item.period}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="company">{item.company}</span>
                  </div>

                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {item.stack.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container projects-section">
          <div className="section-header">
            <p className="kicker">Projects</p>
            <h2>Hands-on work in analytics, dashboarding, and practical problem solving.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.number} className="project-card">
                <div className="project-preview" aria-hidden="true">
                  <span className="project-index">{project.number}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>

                  <div className="project-outline">
                    <div>
                      <label>Problem</label>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <label>Solution</label>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  <div className="tag-row">
                    {project.stack.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="inline-link" target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined}>
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container dashboard-section">
          <div className="section-header">
            <p className="kicker">Data & Technical Skills</p>
            <h2>Python, SQL, data analysis, and core technical fundamentals.</h2>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-panel analytics-panel">
              <div className="radial-chart" aria-label="Skill clusters">
                <div className="ring ring-one" />
                <div className="ring ring-two" />
                <div className="ring ring-three" />
                <div className="ring-core">Profile</div>
              </div>

              <div className="cluster-list">
                <span>Python</span>
                <span>SQL</span>
                <span>Data</span>
                <span>Analysis</span>
              </div>
            </div>

            <div className="dashboard-panel stack-panel">
              {analyticsBlocks.map((group) => (
                <div key={group.label} className="analytics-group">
                  <h3>{group.label}</h3>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span key={item} className="tag soft">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-wall" aria-label="Technology stack">
            {Object.entries(technologyGroups).map(([group, items]) => (
              <div key={group} className="tech-group">
                <h3>{group}</h3>
                <div className="tag-row">
                  {items.map((item) => (
                    <span key={item} className="tag tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section container focus-section">
          <div className="section-header">
            <p className="kicker">Currently Building Toward</p>
            <h2>Computer Science → Python → SQL → Data Analysis → Data-focused opportunities</h2>
          </div>

          <div className="focus-flow" aria-label="Professional development path">
            <span>Computer Science</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Data Analysis</span>
            <span>Growth</span>
          </div>
        </section>

        <section className="section container resume-section">
          <div className="resume-card">
            <div>
              <p className="kicker">Resume</p>
              <h2>Want the full picture?</h2>
            </div>
            <p>
              Explore the technical foundation, data focus, and evolving career direction behind this portfolio.
            </p>
            <a href="/resume.txt" download className="button button-primary">
              Download Resume
            </a>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="contact-copy">
            <p className="kicker">Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p>
              I am open to opportunities where Python, SQL, data analysis, and thoughtful problem solving can create real value.
            </p>

            <div className="contact-links">
              <a href="mailto:awasthishivanshi805@gmail.com">awasthishivanshi805@gmail.com</a>
              <a href="https://www.linkedin.com/in/shivanshi-awasthi-927b44337" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/shivanshiawasthi/Nassau-Profitability-Analysis" target="_blank" rel="noreferrer">GitHub</a>
              <a href="/resume.txt" download>Resume</a>
            </div>
          </div>

          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me about the opportunity." rows={4} />
            </label>
            <button type="submit" className="button button-primary">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="footer-name">Shivanshi Awasthi</span>
            <p>Python • SQL • Data Analytics</p>
          </div>

          <div className="footer-links">
            <a href="https://github.com/shivanshiawasthi/Nassau-Profitability-Analysis" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shivanshi-awasthi-927b44337" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:awasthishivanshi805@gmail.com">Email</a>
            <a href="/resume.txt" download>Resume</a>
          </div>
        </div>

        <div className="container footer-bottom">© 2026 Shivanshi Awasthi. Built with curiosity and code.</div>
      </footer>
    </div>
  )
}

export default App
