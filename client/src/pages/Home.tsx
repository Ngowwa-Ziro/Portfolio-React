import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleArrowOutUpRight,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Linkedin,
  Menu,
  MessageCircle,
  Network,
  PanelTop,
  Play,
  Radio,
  Send,
  Server,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { automations, navItems, processSteps, projects, services, siteConfig, skillGroups } from "@/data/portfolio";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label-light" : ""}`}><span>{number}</span><span>{children}</span></div>;
}

function Mockup({ project }: { project: (typeof projects)[number] }) {
  const accentClass = `mockup-${project.accent}`;
  return (
    <div className={`project-mockup ${accentClass}`} aria-label={`${project.name} representative project visual`}>
      <div className="mockup-topbar"><span className="mock-dots"><i /><i /><i /></span><span className="mock-url">app.{project.name.toLowerCase().replaceAll(" ", "-")}.local</span><span className="mock-topmark">JZN / 0{project.number}</span></div>
      <div className="mockup-body">
        <aside className="mock-sidebar"><span className="mock-logo">J</span><div className="mock-side-line active" /><div className="mock-side-line" /><div className="mock-side-line" /><div className="mock-side-line short" /><div className="mock-side-bottom" /></aside>
        <div className="mock-main">
          <div className="mock-heading"><div><small>OVERVIEW / {project.category.split(" /")[0].toUpperCase()}</small><strong>{project.name}</strong></div><span className="mock-profile">JZ</span></div>
          <div className="mock-stats"><span /><span /><span /></div>
          <div className="mock-content-grid"><div className="mock-chart"><div className="chart-label">ACTIVITY / THIS MONTH</div><svg viewBox="0 0 330 110" role="img" aria-label="Decorative activity line chart"><path d="M0 86 C30 78 30 50 63 61 S100 74 124 42 S162 58 186 28 S218 51 240 32 S290 42 330 12" fill="none" stroke="currentColor" strokeWidth="3" /><path d="M0 86 C30 78 30 50 63 61 S100 74 124 42 S162 58 186 28 S218 51 240 32 S290 42 330 12 V110 H0Z" fill="currentColor" opacity=".09" /></svg></div><div className="mock-list"><div className="mock-list-title">RECENT FLOW <span>•••</span></div><div className="mock-item"><b />Document processed <em>now</em></div><div className="mock-item"><b />API connected <em>2m</em></div><div className="mock-item"><b />Workflow updated <em>14m</em></div></div></div>
        </div>
      </div>
      {project.note && <span className="mock-note">{project.note}</span>}
    </div>
  );
}

function SystemMap() {
  return (
    <div className="system-map" aria-label="System map showing web, API, database, automation and AI connections">
      <div className="map-glow" />
      <div className="map-header"><span>JZN / SYSTEM MAP</span><span className="map-live"><i /> LIVE MODEL</span></div>
      <svg className="map-lines" viewBox="0 0 620 430" aria-hidden="true"><path d="M125 110 C215 78 238 155 310 174" /><path d="M125 310 C215 342 240 260 310 230" /><path d="M310 174 C385 134 414 111 503 110" /><path d="M310 230 C392 259 426 311 503 310" /><path d="M310 174 L310 230" /></svg>
      <div className="map-node node-web"><span className="node-icon"><Globe2 /></span><b>WEB</b><small>Interface</small></div>
      <div className="map-node node-api"><span className="node-icon"><Network /></span><b>API</b><small>Connect</small></div>
      <div className="map-node node-core"><span className="node-icon"><Sparkles /></span><b>SYSTEM</b><small>Working solution</small></div>
      <div className="map-node node-data"><span className="node-icon"><Database /></span><b>DATA</b><small>Structure</small></div>
      <div className="map-node node-ai"><span className="node-icon"><Zap /></span><b>AI</b><small>Automate</small></div>
      <div className="map-foot"><span>WEB / API / DATA / AUTOMATION / AI</span><span>01—05</span></div>
    </div>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedAutomation, setSelectedAutomation] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id === "process") setActiveStep(Math.min(6, Math.max(0, Math.floor((window.scrollY - visible.boundingClientRect.top) / 180))));
    }, { threshold: [0.15, 0.35, 0.65] });
    const process = document.getElementById("process");
    if (process) observer.observe(process);
    return () => observer.disconnect();
  }, []);

  const activeProject = useMemo(() => projects[selectedProject], [selectedProject]);
  const activeService = services[selectedService];
  const activeAutomation = automations[selectedAutomation];

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormStatus("Your message is ready to connect — add an email service or backend endpoint to enable delivery.");
    form.reset();
  }

  function navigate(id: string) {
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="brand-mark" onClick={() => navigate("top")} aria-label="Back to top"><span>JZN</span><i /></button>
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
            <button className="nav-mobile-cta" onClick={() => navigate("contact")}>Let's Work Together <ArrowUpRight size={15} /></button>
          </nav>
          <button className="nav-cta" onClick={() => navigate("contact")}>Let's Work Together <ArrowUpRight size={15} /></button>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow reveal-up"><span className="eyebrow-dot" /> {siteConfig.availability}</div>
              <p className="hero-kicker reveal-up delay-1">JOSEPH ZIRO NGOWWA <span>/</span> SOFTWARE + SYSTEMS</p>
              <h1 className="reveal-up delay-2">Digital work<br />with <em>purpose.</em></h1>
              <p className="hero-role reveal-up delay-3">{siteConfig.role}</p>
              <p className="hero-description reveal-up delay-3">{siteConfig.description.replace("Joseph Ziro Ngowwa builds", "I build").replace(".", " — ")} I combine software development, APIs and automation to turn business requirements into practical digital systems.</p>
              <div className="hero-actions reveal-up delay-4"><button className="button button-light" onClick={() => navigate("work")}>View my work <ArrowDownRight size={16} /></button><button className="text-link light-link" onClick={() => navigate("contact")}>Let's work together <ArrowUpRight size={16} /></button></div>
            </div>
            <div className="hero-visual reveal-scale delay-2"><SystemMap /><div className="visual-caption"><span>01</span><span>From idea to<br />working system</span><span className="caption-line" /></div></div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="value-strip"><div className="container strip-inner">{["WEB DEVELOPMENT", "BUSINESS SYSTEMS", "API INTEGRATION", "AI AUTOMATION"].map((item, i) => <div className="strip-item" key={item}><span>0{i + 1}</span><b>{item}</b><ArrowUpRight size={15} /></div>)}</div></section>

        <section className="section about-section" id="about"><div className="container"><SectionLabel number="01">The person behind the work</SectionLabel><div className="about-layout"><div className="section-title-wrap"><h2>Build around<br /><span>the real problem.</span></h2><p className="lead-copy">I don't just build pages. I build systems around how a business actually works.</p></div><div className="about-copy"><p>My background spans software development and entrepreneurship, with experience across HR and recruitment, hospitality, finance, logistics, ecommerce and organizational management.</p><p>That range has made me increasingly interested in the space where <strong>software, AI and automation</strong> meet: turning messy requirements into tools people can actually use.</p><div className="equation"><div><span>Developer</span><b>+</b><span>Business problem</span><b>+</b><span>Technology</span></div><ArrowDownRight size={20} /><strong>Working solution</strong></div></div></div></div></section>

        <section className="section services-section" id="services"><div className="container"><SectionLabel number="02">Capabilities</SectionLabel><div className="services-heading"><h2>What I can<br /><span>build for you.</span></h2><p>Useful digital work sits between a clear problem and a thoughtful implementation. Choose a capability to see the shape of the work.</p></div><div className="services-layout"><div className="service-list" role="tablist" aria-label="Services">{services.map((service, index) => <button className={selectedService === index ? "service-row active" : "service-row"} onClick={() => setSelectedService(index)} key={service.title} role="tab" aria-selected={selectedService === index}><span>{service.eyebrow}</span><strong>{service.title}</strong><ChevronRight size={18} /></button>)}</div><div className="service-detail" role="tabpanel"><div className="detail-top"><span className="detail-index">{activeService.eyebrow} / CAPABILITY</span><span className="detail-icon"><Layers3 size={20} /></span></div><h3>{activeService.title}</h3><p className="detail-description">{activeService.description}</p><div className="detail-columns"><div><small>WHAT IT SOLVES</small><p>{activeService.solves}</p></div><div><small>WHAT I CAN BUILD</small><p>{activeService.builds}</p></div></div><div className="tag-row">{activeService.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></div></div></section>

        <section className="section work-section" id="work"><div className="container"><SectionLabel number="03">Selected work</SectionLabel><div className="work-heading"><div><h2>Real systems,<br /><span>useful outcomes.</span></h2></div><p>Projects and development experience shaped around business workflows, digital products and the details that make a system useful.</p></div><div className="project-showcase"><div className="project-visual"><Mockup project={activeProject} /><div className="visual-index">PROJECT {activeProject.number} / 06</div></div><div className="project-info"><div className="project-meta"><span>{activeProject.number}</span><span>{activeProject.category}</span></div><h3>{activeProject.name}</h3><p className="project-description">{activeProject.description}</p><div className="project-detail-grid"><div><small>THE PROBLEM</small><p>{activeProject.problem}</p></div><div><small>THE SOLUTION</small><p>{activeProject.solution}</p></div></div><div className="tag-row project-tags">{activeProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-actions">{activeProject.externalUrl ? <a className="button button-dark" href={activeProject.externalUrl} target="_blank" rel="noreferrer">Visit project <CircleArrowOutUpRight size={16} /></a> : <span className="text-note">{activeProject.note}</span>}<button className="text-link dark-link" onClick={() => scrollToId("project-index")}>View all projects <ArrowUpRight size={16} /></button></div></div></div><div className="project-index" id="project-index">{projects.map((project, index) => <button key={project.name} className={selectedProject === index ? "project-index-row active" : "project-index-row"} onClick={() => setSelectedProject(index)}><span>{project.number}</span><b>{project.name}</b><small>{project.category}</small><ArrowUpRight size={15} /></button>)}</div></div></section>

        <section className="section automation-section" id="automation"><div className="container"><SectionLabel number="04" light>Software meets automation</SectionLabel><div className="automation-heading"><div><h2>Less repetitive work.<br /><em>Better information flow.</em></h2></div><p>I build AI-powered workflows that connect information, tools and business processes — not for hype, but to make decisions faster and processes more consistent.</p></div><div className="automation-layout"><div className="automation-nav">{automations.map((automation, index) => <button key={automation.title} onClick={() => setSelectedAutomation(index)} className={selectedAutomation === index ? "automation-nav-row active" : "automation-nav-row"}><span>0{index + 1}</span><b>{automation.title}</b><ChevronRight size={16} /></button>)}</div><div className="automation-detail"><div className="workflow-header"><span>{activeAutomation.tag}</span><span>WORKFLOW / 0{selectedAutomation + 1}</span></div><h3>{activeAutomation.title}</h3><p>{activeAutomation.detail}</p><div className="workflow"><div className="workflow-node workflow-input"><small>INPUT</small><strong>{activeAutomation.input}</strong></div>{activeAutomation.flow.map((step, index) => <div className="workflow-step" key={step}><span className="workflow-connector" /><div className="workflow-node"><small>0{index + 1}</small><strong>{step}</strong></div></div>)}<div className="workflow-output"><Check size={16} /><span>DEFINED OUTPUT</span></div></div></div></div><div className="ai-stack"><span>AI / API / DATA / AUTOMATION / HUMAN</span><div>{["n8n", "AI Agents", "LLM APIs", "OpenRouter", "Mistral", "Google Sheets", "Gmail"].map((item) => <b key={item}>{item}</b>)}</div></div></div></section>

        <section className="section skills-section" id="skills"><div className="container"><SectionLabel number="05">The stack</SectionLabel><div className="skills-heading"><h2>Technology should<br /><span>work together.</span></h2><p>Not a wall of logos. A practical map of the layers I use to shape a working solution.</p></div><div className="stack-map"><div className="stack-column stack-labels"><span>FRONTEND</span><span>BACKEND</span><span>DATA</span><span>INTEGRATION</span><span>AUTOMATION</span><span>AI</span></div><div className="stack-column stack-flow"><div><PanelTop /><strong>JavaScript / HTML / CSS</strong><small>What people interact with</small></div><i /><div><Server /><strong>PHP / Laravel</strong><small>Where business logic lives</small></div><i /><div><Database /><strong>SQL</strong><small>Information with structure</small></div><i /><div><Network /><strong>REST APIs</strong><small>Systems that connect</small></div><i /><div><GitBranch /><strong>n8n</strong><small>Workflows that move</small></div><i /><div><Sparkles /><strong>LLM APIs / Agents</strong><small>Intelligence with boundaries</small></div></div><div className="stack-side-note"><span>THE PRINCIPLE</span><p>Technology should solve something — the stack follows the work.</p></div></div><div className="skill-groups">{skillGroups.map((group) => <div className={`skill-group skill-${group.color}`} key={group.label}><small>{group.label}</small><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="section process-section" id="process"><div className="container"><SectionLabel number="06">How I work</SectionLabel><div className="process-heading"><h2>From problem to<br /><span>working solution.</span></h2><p>A straightforward process keeps the work grounded in what needs to change, who needs to use it and what useful looks like.</p></div><div className="process-layout"><div className="process-list">{processSteps.map(([number, title, description], index) => <button key={number} className={activeStep === index ? "process-row active" : "process-row"} onClick={() => setActiveStep(index)}><span>{number}</span><b>{title}</b><ChevronDown size={16} /></button>)}</div><div className="process-detail"><span className="process-detail-index">STEP {processSteps[activeStep][0]}</span><h3>{processSteps[activeStep][1]}</h3><p>{processSteps[activeStep][2]}</p><div className="process-progress"><span style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }} /></div><div className="process-foot"><span>JZN / WORKING METHOD</span><span>{String(activeStep + 1).padStart(2, "0")} / 07</span></div></div></div></div></section>

        <section className="section contact-section" id="contact"><div className="container"><SectionLabel number="07" light>Start a conversation</SectionLabel><div className="contact-heading"><h2>Have a problem<br /><em>worth solving?</em></h2><p>Whether you need a website, business system, API integration or an automated workflow, let's talk about what you're trying to achieve.</p></div><div className="contact-layout"><form className="contact-form" onSubmit={handleContact}><div className="form-grid"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label></div><label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select a project type</option><option>Website</option><option>Web Application</option><option>Business System</option><option>API Integration</option><option>AI Automation</option><option>Other</option></select></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about what you are trying to solve..." /></label><div className="form-bottom"><button className="button button-light" type="submit">Start a project <Send size={16} /></button><span>{formStatus || "Frontend form ready — delivery endpoint to be connected."}</span></div></form><aside className="contact-aside"><div className="aside-orbit"><MessageCircle size={26} /><span /><span /><span /></div><p>Good work starts with a useful question.</p><div className="contact-placeholders"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={14} /></a><a href="#contact" onClick={(event) => event.preventDefault()}>{siteConfig.linkedin} <Linkedin size={14} /></a><a href="#contact" onClick={(event) => event.preventDefault()}>{siteConfig.github} <Code2 size={14} /></a></div></aside></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><button className="footer-brand" onClick={() => navigate("top")}>JOSEPH ZIRO<br /><span>NGOWWA</span></button><p>Software Developer<br />AI Automation</p></div><div className="footer-nav"><small>EXPLORE</small>{navItems.slice(0, 6).map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}</div><div className="footer-social"><small>CONNECT</small><a href={`mailto:${siteConfig.email}`}>Email <ArrowUpRight size={14} /></a><a href="#contact" onClick={(event) => event.preventDefault()}>LinkedIn <ArrowUpRight size={14} /></a><a href="#contact" onClick={(event) => event.preventDefault()}>GitHub <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© 2026 Joseph Ziro Ngowwa.</span><span>Built with code, curiosity & a lot of debugging.</span><span>HTML / CSS / JS / PHP / LARAVEL / AI</span></div></footer>
    </div>
  );
}

export default Home;
