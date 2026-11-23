import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Menu, Monitor, Smartphone, X } from "lucide-react";
import { profile, projectPath, projects, type ProjectCategory } from "@/portfolio-data";

const sections = [
  ["home", "home"],
  ["expertise", "expertise"],
  ["work", "work"],
  ["experience", "experience"],
  ["contact", "contact"],
] as const;

const skills = [
  { icon: Monitor, title: <>Software<br />Development</>, accent: "pink", text: "Thoughtful software solutions, built with a focus on clean, maintainable code." },
  { icon: Code2, title: <>Frontend Dev<br />React, Next.js</>, accent: "blue", text: "Responsive, accessible interfaces that bring ideas to life on the web." },
  { icon: Smartphone, title: <>App Dev<br />Android, iOS</>, accent: "orange", text: "Cross-platform mobile experiences made for the people who use them." },
];

const filters: { label: string; value: "All" | ProjectCategory; count: string }[] = [
  { label: "All", value: "All", count: "09" },
  { label: "Web Development", value: "Web Development", count: "08" },
  { label: "Mobile App", value: "Mobile App", count: "01" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="/#home" aria-label="Go to home">{profile.wordmark}<span>._</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {sections.map(([id, label], i) => (
          <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}><span className="slashes">//</span> {label}<sup>{String(i + 1).padStart(2, "0")}</sup></a>
        ))}
      </nav>
      <span className="header-right">OJDEVTECH / 2026</span>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-kicker">OJDEVTECH / DIGITAL BUILD STUDIO</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <div className="hero-disciplines">
          <span>BUILDING FOR THE WEB</span>
          <div><span>DEVELOPMENT</span><i /> <span>DESIGN</span><i /> <span>EXPERIENCES</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#expertise" aria-label="Scroll to expertise"><span>SCROLL TO EXPLORE</span><ArrowDown size={18} /></a>
      <div className="hero-side">01 — 05</div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="expertise section-wrap">
      <div className="section-eyebrow"><span>01 / WHAT I DO</span><span className="line" /></div>
      <h2 className="center-title">My Expertise<span className="period">.</span></h2>
      <div className="expertise-grid">
        {skills.map(({ icon: Icon, title, accent, text }) => (
          <article className={`skill-card ${accent}`} key={accent}>
            <div className="skill-heading"><Icon strokeWidth={1.2} size={42} /><h3>{title}</h3></div>
            <div className="code-copy"><span>&lt;h3&gt;</span><p>{text}</p><span>&lt;/h3&gt;</span></div>
          </article>
        ))}
      </div>
      <div className="code-decoration" aria-hidden="true"><span>&lt;html lang="en"&gt;</span><br />&nbsp; &lt;body&gt;<br />&nbsp;&nbsp; &lt;h1&gt;Hello, world!&lt;/h1&gt;<br />&nbsp; &lt;/body&gt;<br />&lt;/html&gt;</div>
      <blockquote>“Sometimes the best way to solve a problem is to help others.”<cite>— Uncle Iroh</cite></blockquote>
    </section>
  );
}

function Work() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return (
    <section id="work" className="work section-wrap">
      <div className="section-eyebrow"><span>02 / SELECTED WORK</span><span className="line" /></div>
      <div className="work-intro">
        <div className="work-copy">
          <h2>My<br />Work<span className="period">.</span></h2>
          <p>A curated set of web builds, mobile products and digital systems — selected as visual references for OjdevTech.</p>
          <p className="source-note">A selection of digital experiences that inspire the way OjdevTech approaches thoughtful design, clear interfaces and reliable builds.</p>
        </div>
        <div className="feature-project">
          <video className="feature-video" autoPlay muted loop playsInline aria-label="Tryotel app preview" poster="/assets/portfolio/tryotel-app.jpg">
            <source src="/assets/portfolio/tryotel-feature.webm" type="video/webm" />
          </video>
          <div className="feature-label"><span className="feature-arrow">↗</span><p>Featured reference project</p><h3>Tryotel App</h3><a className="button" href={projectPath(projects[2])}>Explore case study <ArrowUpRight size={15} /></a></div>
        </div>
      </div>
      <div className="filter-bar" aria-label="Filter projects">
        <span className="filter-label">Filter by</span>
        {filters.map((item, i) => <button key={item.value} className={filter === item.value ? "active" : ""} onClick={() => setFilter(item.value)} aria-pressed={filter === item.value}>{i > 0 && <span className="filter-slash">/</span>}{item.label}<sup>{item.count}</sup></button>)}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className="project-card" key={project.title}>
            <a href={projectPath(project)} className="project-image" aria-label={`View ${project.title} project details`}>
              <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
              <span className="image-arrow"><ArrowUpRight size={19} /></span>
            </a>
            <div className="project-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
            <h3><a href={projectPath(project)}>{project.title}</a></h3>
            <p>{project.description}</p>
            {project.details && <p className="project-details">{project.details}</p>}
            <a className="text-link" href={projectPath(project)}>View project <ArrowUpRight size={14} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience section-wrap">
      <div className="section-eyebrow"><span>03 / THE JOURNEY</span><span className="line" /></div>
      <div className="experience-layout">
        <div><h2>What OjdevTech<br />Brings<span className="period">.</span></h2><p className="section-intro">A practical offer for founders, creators and growing teams.</p></div>
        <div className="experience-placeholder">
          <span className="placeholder-index">01 / THE OJDEVTECH OFFER</span>
          <Braces size={34} strokeWidth={1.2} />
          <h3>From first idea to a shipped product.</h3>
          <p>OjdevTech helps turn rough ideas into clear, responsive digital experiences — from landing pages and business websites to custom web apps and cross-platform mobile products.</p>
          <div className="skill-tags"><span>WEB DESIGN</span><span>FRONTEND BUILDS</span><span>MOBILE APPS</span><span>PRODUCT SUPPORT</span></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-wrap">
      <div className="section-eyebrow"><span>04 / SAY HELLO</span><span className="line" /></div>
      <div className="contact-inner"><div><p className="contact-kicker">HAVE A PROJECT IN MIND?</p><h2>Let's work<br />together<span className="period">.</span></h2></div>
        <div className="contact-copy"><p>Have an exciting project or an idea you’d like to talk about? Let’s make something great.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={22} /></a>
          <div className="socials">
            {([["GitHub", profile.github], ["Discord", profile.discord]] as const).map(([label, url]) => url ? <a key={label} href={url} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={13} /></a> : <span key={label}>{label} <ArrowUpRight size={13} /></span>)}
          </div>
        </div>
      </div>
      <footer><a className="wordmark" href="#home">{profile.wordmark}<span>._</span></a><p>© 2026 OjdevTech. Built with care.</p><a href="#home" className="back-top">BACK TO TOP <ArrowRight size={15} /></a></footer>
    </section>
  );
}

export default function Home() {
  return <><Header /><main><Hero /><Expertise /><Work /><Experience /><Contact /></main></>;
}
