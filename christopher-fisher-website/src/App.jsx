import { ArrowUpRight, Mail, BookOpen, Microscope, Building2, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const publications = [
  {
    title: 'Enhanced safety and efficacy of protease-regulated CAR-T cell receptors',
    journal: 'Cell',
    year: '2022',
    tag: 'Cell Therapy',
  },
  {
    title: 'Inosine induces stemness features in CAR-T cells and enhances potency',
    journal: 'Cancer Cell',
    year: '2024',
    tag: 'Immunometabolism',
  },
  {
    title: 'A versatile CRISPR-Cas13d platform for multiplexed transcriptomic regulation and metabolic engineering in primary human T cells',
    journal: 'Cell',
    year: '2024',
    tag: 'CRISPR Systems',
  },
  {
    title: 'GLUT1 overexpression in CAR-T cells induces metabolic reprogramming and enhances potency',
    journal: 'Nature Communications',
    year: '2024',
    tag: 'Metabolic Engineering',
  },
  {
    title: 'Homology-independent targeted insertion enables guided CAR knock-in and efficient clinical scale CAR-T cell manufacturing',
    journal: 'Molecular Cancer',
    year: '2023',
    tag: 'Manufacturing',
  },
  {
    title: 'Affordable IgY-based antiviral prophylaxis for resource-limited settings to address epidemic and pandemic risks',
    journal: 'Journal of Global Health',
    year: '2022',
    tag: 'Global Health',
  },
]

const featureCards = [
  {
    icon: Microscope,
    eyebrow: 'Research',
    title: 'Engineering immune cells for safer, more powerful cancer therapy',
    body: 'Work across CAR-T cell design, safety switches, stemness, metabolic reprogramming, CRISPR systems, and scalable manufacturing.',
  },
  {
    icon: GraduationCap,
    eyebrow: 'Medicine',
    title: 'Training at the intersection of clinical care and discovery',
    body: 'M.D.-Ph.D. education focused on translating mechanistic science into better patient-centered technologies.',
  },
  {
    icon: Building2,
    eyebrow: 'Innovation',
    title: 'Evaluating the path from scientific insight to health technology',
    body: 'Venture analysis experience across biotechnology, medical devices, digital health, and startup ecosystems.',
  },
]

const timeline = [
  ['2023–2030', 'University at Buffalo', 'M.D.-Ph.D. trainee and medical student.'],
  ['2021–2023', 'Stanford Mackall Laboratory', 'Life science research professional in cellular immunotherapy.'],
  ['2021–Present', 'ShangBay Capital', 'Venture capital analyst in life science and medical technology.'],
  ['2020–2021', 'Stanford University', 'M.S. in Laboratory Animal Science, 4.0 GPA.'],
  ['2016–2020', 'Canisius College', 'B.S. in Biology and Creative Writing.'],
]

const process = [
  ['01', 'Observe', 'Identify urgent clinical, biological, and market needs.'],
  ['02', 'Invent', 'Translate mechanistic insights into therapeutic and technology concepts.'],
  ['03', 'Validate', 'Interrogate feasibility through experiments, teams, and venture analysis.'],
  ['04', 'Scale', 'Move promising ideas toward implementation, manufacturing, and patient impact.'],
]

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a href="#top" className="brand">
          <span>Christopher J. Fisher</span>
          <small>Medicine · Immunotherapy · Biodesign</small>
        </a>

        <nav className="nav-links">
          <a href="#research">Research</a>
          <a href="#approach">Approach</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-button">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Welcome to the future of translational medicine</p>
              <h1>Science, medicine, and venture thinking for health innovation.</h1>
            </motion.div>

            <motion.div
              className="hero-side"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p>
                M.D.-Ph.D. trainee, Stanford-trained scientist, and biotechnology venture analyst working across cellular immunotherapy, CRISPR systems, and medical innovation.
              </p>
              <div className="button-row">
                <a className="button primary" href="https://scholar.google.com/citations?hl=en&user=P_BR59MAAAAJ" target="_blank" rel="noreferrer">
                  Google Scholar <ArrowUpRight size={16} />
                </a>
                <a className="button secondary" href="mailto:cfisher7595@gmail.com">
                  Email <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="metrics">
            {[
              ['9+', 'peer-reviewed publications'],
              ['Cell', 'Cancer Cell + Nature Communications'],
              ['Stanford', 'research and graduate training'],
              ['VC', 'biotech and medtech analysis'],
            ].map(([big, small]) => (
              <div className="metric" key={small}>
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          {featureCards.map((card) => {
            const Icon = card.icon
            return (
              <article className="feature-card" key={card.title}>
                <div>
                  <Icon size={28} />
                  <p className="card-eyebrow">{card.eyebrow}</p>
                  <h2>{card.title}</h2>
                </div>
                <p>{card.body}</p>
              </article>
            )
          })}
        </section>

        <section id="research" className="section research">
          <div className="section-intro">
            <p className="eyebrow blue">Research Agenda</p>
            <h2>From engineered cells to patient impact.</h2>
          </div>
          <div className="research-grid">
            {['CAR-T Cell Engineering', 'Cancer Immunotherapy', 'CRISPR-Cas13d Systems', 'Metabolic Reprogramming', 'Clinical Translation', 'Health Technology Innovation'].map((item) => (
              <div className="research-item" key={item}>
                <h3>{item}</h3>
                <p>A focused area connecting biological mechanism, translational feasibility, and implementation strategy.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="approach">
          <div className="section-intro wide">
            <p className="eyebrow blue">Biodesign-Inspired Approach</p>
            <h2>A need-driven process for biomedical translation.</h2>
          </div>
          <div className="process-grid">
            {process.map(([num, title, body]) => (
              <div className="process-card" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="publications">
          <div className="publications-header">
            <div>
              <p className="eyebrow dark">Selected Scholarship</p>
              <h2>Research in print.</h2>
            </div>
            <a href="https://scholar.google.com/citations?hl=en&user=P_BR59MAAAAJ" target="_blank" rel="noreferrer">
              View Google Scholar <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="publication-grid">
            {publications.map((pub, index) => (
              <article className={`publication-card ${index === 0 ? 'featured-publication' : ''}`} key={pub.title}>
                <div>
                  <div className="publication-meta">
                    <span>{pub.tag}</span>
                    <span>{pub.year}</span>
                  </div>
                  <h3>{pub.title}</h3>
                </div>
                <p>{pub.journal}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-intro">
            <p className="eyebrow blue">Experience</p>
            <h2>A cross-disciplinary path.</h2>
          </div>
          <div className="timeline">
            {timeline.map(([date, place, desc]) => (
              <div className="timeline-row" key={place}>
                <span>{date}</span>
                <h3>{place}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="current-focus">
          <div>
            <p className="eyebrow dark">Current Focus</p>
            <h2>Building a career at the edge of biomedical discovery and implementation.</h2>
          </div>
          <div>
            <p>Christopher’s work connects wet-lab research, medical training, health technology evaluation, and scientific storytelling.</p>
            <p>The site is designed to function as a professional academic homepage, research portfolio, publication hub, and launchpad for future essays or project updates.</p>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow blue">Contact</p>
          <h2>Collaborations in science, medicine, and biotechnology.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:cfisher7595@gmail.com">cfisher7595@gmail.com</a>
          <a href="mailto:cfisher8@buffalo.edu">cfisher8@buffalo.edu</a>
          <a href="https://scholar.google.com/citations?hl=en&user=P_BR59MAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
          <p>© 2026 Christopher J. Fisher. Designed for GitHub Pages / Vercel deployment.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
