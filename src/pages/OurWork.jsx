import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/OurWork.css";
const FILTERS = ["All", "Web", "Mobile", "Branding", "E-Commerce", "SaaS"];

const projects = [
    {
        id: 1, title: "Noir Commerce Platform", category: "E-Commerce", year: "2024",
        desc: "End-to-end luxury e-commerce with editorial art direction, 3D product views, and a checkout flow optimised for high-ticket sales.",
        tags: ["Next.js", "Shopify", "Framer Motion"],
        span: "ow-span-7", height: "ow-h-tall",
        grad: "linear-gradient(160deg, #1a1206 0%, #2e1f08 50%, #0a0804 100%)",
        icon: "◆", featured: true,
        result: { num: "4.2×", label: "revenue increase" },
    },
    {
        id: 2, title: "Luminary Analytics", category: "SaaS", year: "2024",
        desc: "Real-time business intelligence platform — complex data made legible through elegant information design.",
        tags: ["React", "D3.js", "Node.js"],
        span: "ow-span-5", height: "ow-h-tall",
        grad: "linear-gradient(160deg, #060e1a 0%, #0f1c30 50%, #04080e 100%)",
        icon: "⬡",
        result: { num: "60%", label: "less support tickets" },
    },
    {
        id: 3, title: "Verd Mobile Banking", category: "Mobile", year: "2023",
        desc: "A fintech app that made financial clarity feel effortless — earned App Store's App of the Day on launch.",
        tags: ["React Native", "Swift"],
        span: "ow-span-4", height: "ow-h-mid",
        grad: "linear-gradient(160deg, #071410 0%, #0e2218 50%, #030806 100%)",
        icon: "○",
        result: { num: "98%", label: "user satisfaction" },
    },
    {
        id: 4, title: "Atelier Brand System", category: "Branding", year: "2023",
        desc: "A complete visual identity for a Parisian luxury fashion house — type, mark, colour, and motion all unified.",
        tags: ["Identity", "Motion", "Print"],
        span: "ow-span-4", height: "ow-h-mid",
        grad: "linear-gradient(160deg, #140608 0%, #281010 50%, #0a0304 100%)",
        icon: "◇",
        result: { num: "220%", label: "brand recall uplift" },
    },
    {
        id: 5, title: "Pulse Fitness Platform", category: "Web", year: "2024",
        desc: "Subscription workout platform with live class streaming, coach scheduling and member analytics.",
        tags: ["Next.js", "WebRTC", "Stripe"],
        span: "ow-span-4", height: "ow-h-mid",
        grad: "linear-gradient(160deg, #0e0a14 0%, #1a1228 50%, #080610 100%)",
        icon: "△",
        result: { num: "18k", label: "members at launch" },
    },
    {
        id: 6, title: "Meridian Capital Portal", category: "Web", year: "2024",
        desc: "Secure investor portal for a VC firm — document management, portfolio dashboards, and LP reporting in one refined interface.",
        tags: ["React", "TypeScript", "AWS"],
        span: "ow-span-8", height: "ow-h-short",
        grad: "linear-gradient(160deg, #0a0e14 0%, #141c24 50%, #050709 100%)",
        icon: "◈", featured: true,
        result: { num: "340%", label: "traffic increase" },
    },
    {
        id: 7, title: "TerraFlow E-Commerce", category: "E-Commerce", year: "2023",
        desc: "Sustainable goods marketplace with carbon tracking, supplier transparency, and a zero-compromise shopping experience.",
        tags: ["Shopify", "Hydrogen", "Tailwind"],
        span: "ow-span-4", height: "ow-h-mid",
        grad: "linear-gradient(160deg, #071410 0%, #122018 50%, #030a06 100%)",
        icon: "○",
        result: { num: "2.8×", label: "conversion rate" },
    },
    {
        id: 8, title: "NorthStar SaaS Rebrand", category: "Branding", year: "2024",
        desc: "Full brand refresh for a B2B SaaS — new identity, design system, and website that tripled their inbound pipeline.",
        tags: ["Brand", "Webflow", "Design System"],
        span: "ow-span-8", height: "ow-h-short",
        grad: "linear-gradient(160deg, #100a08 0%, #201410 50%, #080504 100%)",
        icon: "◆",
        result: { num: "3×", label: "inbound pipeline" },
    },
];

const caseStudies = [
    {
        id: "cs1", title: "Rebuilding Meridian's investor experience", category: "Web · SaaS",
        desc: "From a clunky PDF workflow to a real-time portal — how we redesigned Meridian Capital's LP experience and cut reporting time by 80%.",
        tags: ["Research", "UX Design", "Engineering", "AWS"],
        result: { num: "80%", label: "less reporting time" },
        grad: "linear-gradient(160deg, #0a0e14 0%, #141c24 100%)", icon: "◈",
    },
    {
        id: "cs2", title: "Verd: designing trust into a fintech app", category: "Mobile · Fintech",
        desc: "How rigorous UX research and a calm, clarity-first visual language helped Verd achieve App of the Day on its first week.",
        tags: ["UX Research", "React Native", "Motion"],
        result: { num: "4.9", label: "App Store rating" },
        grad: "linear-gradient(160deg, #071410 0%, #0e2218 100%)", icon: "○",
    },
    {
        id: "cs3", title: "Scaling Noir's checkout to 7 figures", category: "E-Commerce",
        desc: "The redesign of a luxury checkout flow that removed friction, added confidence signals, and added €1.2M in annual revenue.",
        tags: ["CRO", "Shopify", "A/B Testing"],
        result: { num: "€1.2M", label: "revenue added" },
        grad: "linear-gradient(160deg, #1a1206 0%, #2e1f08 100%)", icon: "◆",
    },
];

const gradients = [
    "linear-gradient(160deg, #1a1206, #0a0804)",
    "linear-gradient(160deg, #060e1a, #04080e)",
    "linear-gradient(160deg, #071410, #030806)",
    "linear-gradient(160deg, #140608, #0a0304)",
    "linear-gradient(160deg, #0e0a14, #080610)",
    "linear-gradient(160deg, #0a0e14, #050709)",
    "linear-gradient(160deg, #071410, #030a06)",
    "linear-gradient(160deg, #100a08, #080504)",
];

function CardShapes({ icon, large }) {
    const rings = large ? [340, 230, 140] : [200, 130, 75];
    return (
        <div className="ow-card-shapes">
            {rings.map((s, i) => (
                <div key={i} className="ow-shape-ring" style={{ width: s, height: s, opacity: 0.5 - i * 0.12 }} />
            ))}
            <span className="ow-shape-icon">{icon}</span>
        </div>
    );
}

export default function OurWork() {
    const [activeFilter, setActiveFilter] = useState("All");
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [pathname])
    const visible = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <>
            <div className="ow-root">
                <div className="ow-blob ow-blob-1" />
                <div className="ow-blob ow-blob-2" />
                <div className="ow-blob ow-blob-3" />
                <div className="ow-grid">
                    <div className="ow-grid-h" style={{ top: "14%" }} />
                    <div className="ow-grid-h" style={{ top: "42%" }} />
                    <div className="ow-grid-h" style={{ top: "70%" }} />
                    <div className="ow-grid-v" style={{ left: "25%" }} />
                    <div className="ow-grid-v" style={{ left: "50%" }} />
                    <div className="ow-grid-v" style={{ left: "75%" }} />
                </div>

                <Navbar />

                <div className="ow-page">

                    {/* ── HERO ── */}
                    <div className="ow-hero">
                        <div>
                            <div className="ow-eyebrow">
                                <div className="ow-eyebrow-line" />
                                <span className="ow-eyebrow-label">Selected Projects — Our Work</span>
                            </div>
                            <h1 className="ow-headline">
                                Work that earns
                                <br />
                                its place in the
                                <br />
                                <em>world</em>
                            </h1>
                        </div>
                        <div className="ow-hero-right">
                            <p className="ow-hero-desc">
                                Every project here is a problem solved, a business grown, and a
                                standard raised. We don't take on work we can't do exceptionally —
                                which is why every case study below is one we're proud to put our name on.
                            </p>
                            <div className="ow-hero-stats">
                                {[
                                    { num: "150", suf: "+", label: "Projects shipped" },
                                    { num: "40", suf: "+", label: "Industries" },
                                    { num: "98", suf: "%", label: "On-time delivery" },
                                    { num: "6", suf: "yrs", label: "In the craft" },
                                ].map(s => (
                                    <div className="ow-hero-stat" key={s.label}>
                                        <div className="ow-hero-stat-num">{s.num}<span>{s.suf}</span></div>
                                        <div className="ow-hero-stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── STICKY FILTER BAR ── */}
                    <div className="ow-filter-bar">
                        <div className="ow-filter-inner">
                            <div className="ow-filters">
                                {FILTERS.map(f => (
                                    <button
                                        key={f}
                                        className={`ow-filter-btn${activeFilter === f ? " active" : ""}`}
                                        onClick={() => setActiveFilter(f)}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                            <div className="ow-filter-count">
                                Showing <span>{visible.length}</span> of {projects.length} projects
                            </div>
                        </div>
                    </div>

                    {/* ── WORK GRID ── */}
                    <div className="ow-grid-wrap">
                        <div className="ow-work-grid">
                            {visible.map(p => {
                                const isLarge = p.span === "ow-span-7" || p.span === "ow-span-8";
                                return (
                                    <div key={p.id} className={`ow-card ${p.span} ${p.height}`}>
                                        <div className="ow-card-bg" style={{ background: p.grad }} />
                                        <CardShapes icon={p.icon} large={isLarge} />
                                        <div className="ow-card-overlay" />

                                        {p.featured && <div className="ow-featured-ribbon">Featured</div>}

                                        <div className="ow-card-top">
                                            <span className="ow-card-year">{p.year}</span>
                                            <div className="ow-card-arrow">↗</div>
                                        </div>

                                        <div className="ow-card-info">
                                            <div className="ow-card-cat">{p.category}</div>
                                            <div className="ow-card-title">{p.title}</div>
                                            <div className="ow-card-desc">{p.desc}</div>
                                            <div className="ow-card-chips">
                                                {p.tags.map(t => <span className="ow-card-chip" key={t}>{t}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ── CASE STUDIES LIST ── */}
                        <div className="ow-case-row">
                            <div style={{
                                padding: "3rem 0 2rem",
                                display: "flex", alignItems: "flex-end",
                                justifyContent: "space-between", gap: "2rem", flexWrap: "wrap"
                            }}>
                                <div>
                                    <div className="ow-eyebrow" style={{ animation: "none", opacity: 1 }}>
                                        <div className="ow-eyebrow-line" />
                                        <span className="ow-eyebrow-label">Deep dives — Case Studies</span>
                                    </div>
                                    <h2 style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                        fontWeight: 900, color: "var(--cream)", lineHeight: 1.1
                                    }}>
                                        The story <em style={{ fontStyle: "italic", color: "var(--gold)" }}>behind</em> the work
                                    </h2>
                                </div>
                                <p style={{
                                    fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.8,
                                    fontWeight: 300, maxWidth: "340px"
                                }}>
                                    Three projects where we documented the full journey — the problem,
                                    the process, and the measurable results.
                                </p>
                            </div>

                            {caseStudies.map(cs => (
                                <div className="ow-case-item" key={cs.id}>
                                    <div className="ow-case-thumb">
                                        <div className="ow-case-thumb-bg" style={{ background: cs.grad }} />
                                        <div className="ow-case-thumb-shapes">
                                            <span className="ow-case-thumb-icon">{cs.icon}</span>
                                        </div>
                                    </div>
                                    <div className="ow-case-meta">
                                        <div className="ow-case-cat">{cs.category}</div>
                                        <div className="ow-case-title">{cs.title}</div>
                                        <div className="ow-case-desc">{cs.desc}</div>
                                        <div className="ow-case-tags">
                                            {cs.tags.map(t => <span className="ow-case-tag" key={t}>{t}</span>)}
                                        </div>
                                    </div>
                                    <div className="ow-case-result">
                                        <div className="ow-case-result-num">{cs.result.num}</div>
                                        <div className="ow-case-result-label">{cs.result.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── CTA BAND ── */}
                    <div className="ow-cta-band">
                        <div className="ow-cta-inner">
                            <div className="ow-cta-bg">Next</div>
                            <div className="ow-cta-left">
                                <div className="ow-eyebrow" style={{ animation: "none", opacity: 1 }}>
                                    <div className="ow-eyebrow-line" />
                                    <span className="ow-eyebrow-label">Your project could be next</span>
                                </div>
                                <h2 className="ow-cta-headline">
                                    Ready to build
                                    <br />
                                    something <em>unforgettable?</em>
                                </h2>
                            </div>
                            <div className="ow-cta-right">
                                <p className="ow-cta-desc">
                                    We're selective about the projects we take on — which means
                                    when we say yes, we mean it fully. Let's talk about yours.
                                </p>
                                <button className="ow-btn-primary">
                                    <span>Start a Conversation</span>
                                    <span className="ow-btn-arrow">↗</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    );
}