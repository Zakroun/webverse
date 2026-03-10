import { useState } from "react";
import "../styles/Portfolio.css";
import { useNavigate } from "react-router-dom";

const FILTERS = ["All", "Web", "Mobile", "Branding", "E-Commerce"];

const projects = [
    {
        id: 1,
        title: "Noir Commerce Platform",
        category: "E-Commerce",
        year: "2024",
        desc: "A full-stack e-commerce experience with editorial design and 3D product visualization.",
        grad: "grad-a",
        icon: "◆",
        featured: true,
        size: "large",
    },
    {
        id: 2,
        title: "Luminary SaaS Dashboard",
        category: "Web",
        year: "2024",
        desc: "Real-time analytics platform with a dark UI and complex data visualization.",
        grad: "grad-b",
        icon: "⬡",
        featured: true,
        size: "small",
    },
    {
        id: 3,
        title: "Verd Mobile Banking",
        category: "Mobile",
        year: "2023",
        desc: "A fintech app focused on clarity, trust, and seamless transactions.",
        grad: "grad-c",
        icon: "○",
        featured: true,
        size: "small",
    },
    {
        id: 4,
        title: "Atelier Brand Identity",
        category: "Branding",
        year: "2023",
        desc: "Visual identity for a luxury fashion house — type, mark, and motion.",
        grad: "grad-d",
        icon: "◇",
    },
    {
        id: 5,
        title: "Pulse Fitness Platform",
        category: "Web",
        year: "2024",
        desc: "Subscription workout platform with live streaming and coach dashboards.",
        grad: "grad-e",
        icon: "△",
    },
    {
        id: 6,
        title: "Meridian Travel App",
        category: "Mobile",
        year: "2023",
        desc: "AI-powered travel planning with offline maps and curated itineraries.",
        grad: "grad-a",
        icon: "◈",
    },
];

function CardShape({ icon, featured }) {
    const rings = featured ? [280, 200, 130] : [160, 110, 70];
    return (
        <div className="pf-card-shape">
            {rings.map((size, i) => (
                <div
                    key={i}
                    className="pf-shape-ring"
                    style={{ width: size, height: size, opacity: 0.6 - i * 0.15 }}
                />
            ))}
            <span className="pf-shape-icon">{icon}</span>
        </div>
    );
}

function Card({ project, height = "260px", featured = false }) {
    return (
        <div className={`pf-card${featured ? " pf-card-featured" : ""}`}>
            <div className="pf-card-visual" style={{ height }}>
                <div className={`pf-card-visual-inner ${project.grad}`} />
                <CardShape icon={project.icon} featured={featured} />
                <div className="pf-card-overlay" />
                <div className="pf-card-year">{project.year}</div>
                <div className="pf-card-arrow">↗</div>
                <div className="pf-card-info">
                    <div className="pf-card-cat">{project.category}</div>
                    <div className="pf-card-title">{project.title}</div>
                    <div className="pf-card-desc">{project.desc}</div>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");

    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);
    const navigate = useNavigate();
    const visibleRest =
        activeFilter === "All"
            ? rest
            : rest.filter((p) => p.category === activeFilter);

    const visibleFeaturedLarge = featured.filter((p) => p.size === "large");
    const visibleFeaturedSmall = featured.filter((p) => p.size === "small");

    return (
        <>
            <section className="pf-root">
                <div className="pf-blob pf-blob-1" />
                <div className="pf-blob pf-blob-2" />
                <div className="pf-grid">
                    <div className="pf-grid-h" style={{ top: "15%" }} />
                    <div className="pf-grid-h" style={{ top: "55%" }} />
                    <div className="pf-grid-h" style={{ top: "82%" }} />
                    <div className="pf-grid-v" style={{ left: "33%" }} />
                    <div className="pf-grid-v" style={{ left: "66%" }} />
                </div>

                <div className="pf-inner">

                    {/* Header */}
                    <div className="pf-header">
                        <div>
                            <div className="pf-eyebrow">
                                <div className="pf-eyebrow-line" />
                                <span className="pf-eyebrow-label">Selected Work — Portfolio</span>
                            </div>
                            <h2 className="pf-headline">
                                Projects that
                                <br />
                                <em>speak</em> louder
                                <br />
                                <span className="outline">than words</span>
                            </h2>
                        </div>
                        <div className="pf-header-right">
                            <p className="pf-header-desc">
                                A curated selection of our most impactful work — each project
                                a testament to craft, strategy, and results-driven design.
                            </p>
                        </div>
                    </div>

                    {/* Filter tabs */}
                    <div className="pf-filters">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                className={`pf-filter-btn${activeFilter === f ? " active" : ""}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Featured row — large + 2 stacked small */}
                    <div className="pf-featured">
                        {visibleFeaturedLarge.map((p) => (
                            <Card key={p.id} project={p} height="520px" featured />
                        ))}
                        <div className="pf-card-side">
                            {visibleFeaturedSmall.map((p) => (
                                <Card key={p.id} project={p} height="256px" />
                            ))}
                        </div>
                    </div>

                    {/* 3-column row */}
                    {visibleRest.length > 0 && (
                        <div className="pf-grid-row" style={{ marginTop: "1.5px" }}>
                            {visibleRest.map((p) => (
                                <Card key={p.id} project={p} height="300px" />
                            ))}
                        </div>
                    )}

                    {/* Stats strip */}
                    <div className="pf-stats">
                        {[
                            { num: "150", suf: "+", label: "Projects Shipped" },
                            { num: "98", suf: "%", label: "Client Satisfaction" },
                            { num: "6", suf: "×", label: "Avg. Speed Gain" },
                            { num: "40", suf: "+", label: "Industries Served" },
                        ].map((s) => (
                            <div className="pf-stat" key={s.label}>
                                <div className="pf-stat-num">
                                    {s.num}<span>{s.suf}</span>
                                </div>
                                <div className="pf-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* View all */}
                    <div className="pf-view-all">
                        <button className="pf-view-btn" onClick={()=>navigate('/our-work')}>
                            <span>View All Projects</span>
                            <span className="pf-view-btn-arrow">↗</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}