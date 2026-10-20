import { useState } from 'react'
import './App.css'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Project' },
  { id: 'connect', label: 'Connect' },
]

// Listed from the current school back to elementary, like stops on a route
const EDUCATION = [
  {
    level: 'College',
    school: 'Batangas State University, Balayan Campus',
    detail: 'BSIT 3A',
    current: true,
  },
  {
    level: 'Senior High School',
    school: 'Immaculate Conception College of Balayan',
    detail: 'ABM strand',
  },
  {
    level: 'Junior High School',
    school: 'Dacanlao National High School',
    detail: '',
  },
  {
    level: 'Elementary',
    school: 'Calaca Central School',
    detail: '',
  },
]

const PROJECTS = [
  {
    title: 'Music Playlist App',
    text: 'A music player built with React and Vite. It has a song list, album covers and playback controls.',
    tags: ['React', 'Vite', 'JavaScript'],
    visual: 'music',
  },
  {
    title: 'Self Portfolio',
    text: 'The website you are on now. It introduces me, shows my education and collects my projects in one place.',
    tags: ['React', 'CSS'],
    visual: 'web',
  },
]

function Route() {
  const path =
    'M -20 430 C 140 430, 220 300, 400 320 S 640 470, 820 390 S 1060 190, 1240 250'

  return (
    <svg
      className="route"
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path id="route-path" d={path} className="route-bed" />
      <path d={path} pathLength="1" className="route-line" />
      <g className="rider">
        <circle r="26" className="rider-ring" />
        <text className="rider-icon" textAnchor="middle" dy="12">
          🚴
        </text>
        <animateMotion dur="9s" begin="1.2s" fill="freeze" calcMode="spline" keySplines="0.45 0 0.2 1" keyTimes="0;1">
          <mpath href="#route-path" />
        </animateMotion>
      </g>
    </svg>
  )
}

function ProjectVisual({ type }) {
  if (type === 'music') {
    return (
      <div className="visual visual-music" aria-hidden="true">
        <div className="vinyl" />
        <div className="bars">
          {[40, 75, 55, 90, 35, 65, 80, 45].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="visual visual-web" aria-hidden="true">
      <div className="window">
        <div className="window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="window-body">
          <b />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand">
          Rainier Canoy
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <Route />
          <div className="hero-inner">
            <h1>
              Rainier
              <br />
              Hernandez
              <br />
              Canoy
            </h1>
            <p className="hero-text">
              BSIT 3A student at Batangas State University TNEU, from
              Dacanlao, Calaca, Batangas. I ride bikes, play mobile games and
              build things with React.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-yellow">
                Read about me
              </a>
              <a href="#connect" className="btn btn-outline">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="block">
          <div className="wrap">
            <h2 className="section-title">About me</h2>

            <div className="about-top">
              <p className="lead">
                I'm a third-year Information Technology student who is
                hardworking, willing to learn, and happiest when a problem
                finally clicks. I plan to graduate and build a happy, better
                life.
              </p>

              <div className="route-card">
                <h3>Where I studied</h3>
                <ul className="stops">
                  {EDUCATION.map((item) => (
                    <li
                      key={item.level}
                      className={item.current ? 'stop current' : 'stop'}
                    >
                      <span className="stop-level">{item.level}</span>
                      <strong>{item.school}</strong>
                      {item.detail && <em>{item.detail}</em>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="interests">
              <div className="interest interest-bike">
                <span className="interest-icon">🚴</span>
                <h3>Cycling</h3>
                <p>How I spend my free time outdoors.</p>
              </div>
              <div className="interest interest-game">
                <span className="interest-icon">🎮</span>
                <h3>Mobile games</h3>
                <p>How I unwind after class.</p>
              </div>
              <div className="interest interest-goal">
                <h3>My goals</h3>
                <p>Graduate, and build a happier, better life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT */}
        <section id="project" className="block block-tint">
          <div className="wrap">
            <h2 className="section-title">Projects</h2>
            <div className="projects">
              {PROJECTS.map((project, index) => (
                <article
                  key={project.title}
                  className={index % 2 ? 'project flip' : 'project'}
                >
                  <ProjectVisual type={project.visual} />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="block">
          <div className="wrap">
            <div className="connect">
              <h2>Let's talk.</h2>
              <a
                className="connect-mail"
                href="mailto:24-18345@g.batstate-u.edu.ph"
              >
                24-18345@g.batstate-u.edu.ph
              </a>
              <dl className="connect-details">
                <div>
                  <dt>Location</dt>
                  <dd>Dacanlao, City of Calaca, Batangas</dd>
                </div>
                <div>
                  <dt>School</dt>
                  <dd>Batangas State University TNEU</dd>
                </div>
                <div>
                  <dt>Program</dt>
                  <dd>BSIT 3A</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Rainier Hernandez Canoy</p>
      </footer>
    </>
  )
}

export default App