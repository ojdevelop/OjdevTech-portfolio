import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useParams } from "wouter";
import { profile, projectPath, projects } from "@/portfolio-data";
import { Header } from "./Home";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((item) => projectPath(item) === `/project/${slug}`);
  if (index < 0) return <NotFound />;
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return <>
    <Header />
    <main className="detail-page">
      <div className="detail-wrap">
        <a className="detail-back" href="/#work"><ArrowLeft size={16} /> Back to work</a>
        <div className="detail-heading">
          <p className="detail-category">{project.category} <span>/ OJDEVTECH REFERENCE</span></p>
          <h1>{project.title}<span className="period">.</span></h1>
          <p className="breadcrumb"><a href="/">Home</a> / Portfolio / {project.title}</p>
        </div>
        <div className="detail-overview">
          <div><span className="detail-label">THE PROJECT</span><p>{project.longDescription || project.description}</p>
            <p className="detail-source">A curated visual reference from the OjdevTech archive. Have a similar idea in mind? <a href={`mailto:${profile.email}`}>Let’s start a conversation <ArrowUpRight size={13} /></a>.</p>
            {project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Open Project <ArrowUpRight size={15} /></a>}
          </div>
          <div className="detail-meta">
            {project.client && <div><span>CLIENT</span><strong>{project.client}</strong></div>}
            {project.details && <div><span>TOOLS & TECHNOLOGIES</span><strong>{project.details}</strong></div>}
            {project.credits && <div><span>CREDITS</span><strong>{project.credits}</strong></div>}
            <div><span>STATUS</span><strong>OjdevTech concept reference</strong></div>
          </div>
        </div>
        <img className="detail-cover" src={project.image} alt={`${project.title} project cover`} />
        {project.detailImage && <img className="detail-screenshot" src={project.detailImage} alt={`${project.title} project screenshot`} loading="lazy" />}
        <div className="next-project"><div><span>NEXT PROJECT</span><h2>{next.title}</h2></div><a href={projectPath(next)} aria-label={`View next project: ${next.title}`}><ArrowRight size={28} /></a></div>
        <footer><a className="wordmark" href="/#home">{profile.wordmark}<span>._</span></a><p>© 2026 OjdevTech. Built with care.</p><a href="/#work" className="back-top">ALL PROJECTS <ArrowRight size={15} /></a></footer>
      </div>
    </main>
  </>;
}
