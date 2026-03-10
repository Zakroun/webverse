import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/Services.css";
const services = [
    {
        num: "01", icon: "⬡", label: "Web Development",
        title: "Custom Website Development",
        desc: "Bespoke websites engineered to perform — from pixel-perfect marketing sites to complex multi-page platforms. Built on modern stacks, optimised from day one.",
        features: ["Fully custom — no templates or themes", "React / Next.js / Webflow / CMS", "Core Web Vitals score 90+", "SEO-structured from the ground up", "Responsive across every device"],
        price: "From €8,000",
    },
    {
        num: "02", icon: "◈", label: "Product Engineering",
        title: "Web & Mobile Application",
        desc: "Full-stack applications built for scale — intuitive interfaces backed by robust, secure architecture. We ship products that users actually want to use.",
        features: ["React, Next.js & Node.js stack", "Cross-platform iOS & Android apps", "REST & GraphQL API architecture", "Real-time features & notifications", "Scalable cloud deployment"],
        price: "From €18,000",
    },
    {
        num: "03", icon: "◇", label: "Design Systems",
        title: "UI/UX Design & Branding",
        desc: "Cohesive visual systems from user research and wireframes through to polished interfaces with motion design that makes your product feel alive.",
        features: ["User research & journey mapping", "Wireframes, prototypes & testing", "Design systems & component libraries", "Motion design & micro-interactions", "Accessibility-first (WCAG 2.1 AA)"],
        price: "From €6,000",
    },
    {
        num: "04", icon: "△", label: "Performance",
        title: "Performance & Security Audit",
        desc: "We audit, optimise and harden your existing digital presence. Speed improvements of 2–5× are common. Every deployment follows OWASP security best practices.",
        features: ["Lighthouse & Core Web Vitals audit", "Image, code & network optimisation", "SSL, CSP & security hardening", "CDN & edge caching strategy", "Monitoring & incident support"],
        price: "From €3,500",
    },
    {
        num: "05", icon: "○", label: "Growth",
        title: "Digital Growth Solutions",
        desc: "From CRO to analytics architecture and digital strategy — we give your business the tools and insight to reach more customers and keep them.",
        features: ["Conversion rate optimisation", "Analytics & event tracking (GA4)", "Technical SEO & schema markup", "A/B testing & growth experiments", "Ongoing consulting & roadmap"],
        price: "From €2,500/mo",
    },
    {
        num: "06", icon: "◆", label: "Retainer",
        title: "Ongoing Studio Retainer",
        desc: "Priority access to our team for continuous product evolution — design updates, feature development, performance monitoring, and strategic guidance.",
        features: ["Dedicated senior team access", "Weekly design & dev sprints", "Priority response & turnaround", "Monthly strategy & review call", "Flexible scope per month"],
        price: "From €5,000/mo",
    },
];

const addons = [
    { icon: "⬡", title: "Domain & Hosting Setup", desc: "Full infrastructure provisioning — DNS, SSL, CDN, and monitored uptime from day one.", bg: "Hosting" },
    { icon: "◈", title: "Content Migration", desc: "Structured migration from any legacy CMS, with data integrity checks throughout.", bg: "Content" },
    { icon: "○", title: "Training & Handover", desc: "A dedicated session so your team can manage and grow the product confidently.", bg: "Training" },
    { icon: "◆", title: "Maintenance Plan", desc: "Monthly security patches, dependency updates, and proactive performance checks.", bg: "Care" },
];

const tableRows = [
    { feature: "Fixed-price proposals", forge: true, agency: false, freelance: false },
    { feature: "Senior team only", forge: true, agency: false, freelance: true },
    { feature: "End-to-end delivery", forge: true, agency: true, freelance: false },
    { feature: "Design + engineering", forge: true, agency: true, freelance: false },
    { feature: "Avg. response < 24hrs", forge: true, agency: false, freelance: true },
    { feature: "Dedicated strategist", forge: true, agency: false, freelance: false },
    { feature: "Post-launch support", forge: true, agency: true, freelance: false },
    { feature: "No retainer required", forge: true, agency: false, freelance: true },
];

const processSteps = [
    { num: "01", title: "Discovery & Strategy", desc: "Deep dive into your business, audience, and goals. We listen before we design." },
    { num: "02", title: "Architecture & Wireframes", desc: "Information structure and user flows mapped before a pixel of UI is produced." },
    { num: "03", title: "Design & Prototyping", desc: "High-fidelity screens and interactive prototypes — you see it before it's built." },
    { num: "04", title: "Engineering & Build", desc: "Production-grade code shipped in sprints with frequent staging deployments." },
    { num: "05", title: "QA & Launch", desc: "Rigorous testing, accessibility checks, and a meticulously planned go-live." },
];

export default function Services() {
    const [activeService, setActiveService] = useState(null);
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [pathname])
    return (
        <>
            <div className="sv-root">
                <div className="sv-blob sv-blob-1" />
                <div className="sv-blob sv-blob-2" />
                <div className="sv-blob sv-blob-3" />
                <div className="sv-grid">
                    <div className="sv-grid-h" style={{ top: "14%" }} />
                    <div className="sv-grid-h" style={{ top: "40%" }} />
                    <div className="sv-grid-h" style={{ top: "68%" }} />
                    <div className="sv-grid-h" style={{ top: "88%" }} />
                    <div className="sv-grid-v" style={{ left: "25%" }} />
                    <div className="sv-grid-v" style={{ left: "50%" }} />
                    <div className="sv-grid-v" style={{ left: "75%" }} />
                </div>

                <Navbar />

                <div className="sv-page">

                    {/* ── HERO ── */}
                    <div className="sv-hero">
                        <div className="sv-hero-watermark">Services</div>
                        <div>
                            <div className="sv-eyebrow">
                                <div className="sv-eyebrow-line" />
                                <span className="sv-eyebrow-label">What We Offer — Services</span>
                            </div>
                            <h1 className="sv-headline">
                                Exceptional
                                <br />
                                work, across
                                <br />
                                every <em>discipline</em>
                            </h1>
                        </div>
                        <div className="sv-hero-right">
                            <p className="sv-hero-desc">
                                From strategy through to shipping — we cover every dimension of
                                digital product creation. Each service is delivered by a senior
                                team that's done it hundreds of times and genuinely cares about
                                doing it right.
                            </p>
                            <div className="sv-trust">
                                {["Fixed-price proposals", "No junior handoffs", "24hr response time", "Post-launch support included"].map(t => (
                                    <div className="sv-trust-item" key={t}>
                                        <div className="sv-trust-dot" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── SERVICE CARDS ── */}
                    <div className="sv-showcase">
                        <div className="sv-showcase-header">
                            <div>
                                <div className="sv-section-eyebrow">
                                    <div className="sv-section-eyebrow-line" />
                                    <span className="sv-section-eyebrow-label">Six Core Services</span>
                                </div>
                                <h2 className="sv-section-headline">
                                    Every service you need,<br /><em>none you don't</em>
                                </h2>
                            </div>
                            <p className="sv-showcase-desc">
                                We keep our offering focused so we can be genuinely exceptional
                                at what we do. No bloated service lists — just six disciplines
                                we've mastered over six years.
                            </p>
                        </div>

                        <div className="sv-cards-grid">
                            {services.map((s, i) => (
                                <div
                                    className="sv-scard"
                                    key={s.num}
                                    onMouseEnter={() => setActiveService(i)}
                                    onMouseLeave={() => setActiveService(null)}
                                >
                                    <div className="sv-scard-num">{s.num}</div>
                                    <div className="sv-scard-icon-wrap">{s.icon}</div>
                                    <div className="sv-scard-label">{s.label}</div>
                                    <div className="sv-scard-title">{s.title}</div>
                                    <div className="sv-scard-desc">{s.desc}</div>
                                    <ul className="sv-scard-features">
                                        {s.features.map(f => (
                                            <li className="sv-scard-feature" key={f}>{f}</li>
                                        ))}
                                    </ul>
                                    <div className="sv-scard-price">
                                        <div>
                                            <div className="sv-scard-price-num">
                                                {s.price} <span>· fixed quote</span>
                                            </div>
                                        </div>
                                        <button className="sv-scard-price-link">
                                            Enquire →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── COMPARISON TABLE ── */}
                    <div className="sv-compare">
                        <div className="sv-compare-header">
                            <div className="sv-section-eyebrow">
                                <div className="sv-section-eyebrow-line" />
                                <span className="sv-section-eyebrow-label">How We Compare</span>
                            </div>
                            <h2 className="sv-section-headline">
                                Why <em>ForgeStudio</em><br />over the alternatives
                            </h2>
                        </div>
                        <div className="sv-table-wrap">
                            <table className="sv-table">
                                <thead className="sv-table-head">
                                    <tr>
                                        <th style={{ width: "38%" }}>What matters to you</th>
                                        <th className="highlight">ForgeStudio</th>
                                        <th>Traditional Agency</th>
                                        <th>Freelancer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map(r => (
                                        <tr key={r.feature}>
                                            <td>{r.feature}</td>
                                            <td className="highlight">
                                                {r.forge ? <span className="sv-check">✓</span> : <span className="sv-cross">✕</span>}
                                            </td>
                                            <td>{r.agency ? <span className="sv-check">✓</span> : <span className="sv-cross">✕</span>}</td>
                                            <td>{r.freelance ? <span className="sv-check">✓</span> : <span className="sv-cross">✕</span>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ── ADD-ONS ── */}
                    <div className="sv-addons">
                        <div className="sv-section-eyebrow">
                            <div className="sv-section-eyebrow-line" />
                            <span className="sv-section-eyebrow-label">Optional Add-ons</span>
                        </div>
                        <h2 className="sv-section-headline" style={{ marginBottom: 0 }}>
                            Everything else<br />you might <em>need</em>
                        </h2>
                        <div className="sv-addons-grid">
                            {addons.map(a => (
                                <div className="sv-addon" key={a.title}>
                                    <span className="sv-addon-icon">{a.icon}</span>
                                    <div className="sv-addon-title">{a.title}</div>
                                    <div className="sv-addon-desc">{a.desc}</div>
                                    <div className="sv-addon-bg">{a.bg}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── PROCESS TEASER ── */}
                    <div className="sv-process">
                        <div className="sv-process-grid">
                            <div>
                                <div className="sv-section-eyebrow">
                                    <div className="sv-section-eyebrow-line" />
                                    <span className="sv-section-eyebrow-label">How We Deliver</span>
                                </div>
                                <h2 className="sv-section-headline" style={{ marginBottom: "2.5rem" }}>
                                    A process built for<br /><em>zero surprises</em>
                                </h2>
                                <div className="sv-process-steps">
                                    {processSteps.map(s => (
                                        <div className="sv-process-step" key={s.num}>
                                            <div className="sv-step-num">{s.num}</div>
                                            <div>
                                                <div className="sv-step-title">{s.title}</div>
                                                <div className="sv-step-desc">{s.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sv-process-visual">
                                <div className="sv-process-visual-box">
                                    {[320, 220, 130].map((s, i) => (
                                        <div key={i} className="sv-process-ring" style={{ width: s, height: s }} />
                                    ))}
                                    <div className="sv-process-center">
                                        <span className="sv-process-center-icon">◈</span>
                                        <div className="sv-process-center-label">5-step process</div>
                                    </div>
                                </div>
                                <div className="sv-process-badge sv-process-badge-top sv-badge-top">
                                    <span className="sv-badge-num">4–10</span>
                                    <span className="sv-badge-label">weeks avg.</span>
                                </div>
                                <div className="sv-process-badge sv-process-badge-bot sv-badge-bot">
                                    <span className="sv-badge-num" style={{ color: "var(--cream)" }}>98%</span>
                                    <span className="sv-badge-label">on-time delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── PULL QUOTE ── */}
                    <div className="sv-pullquote">
                        <div className="sv-pullquote-inner">
                            <div className="sv-quote-mark">"</div>
                            <p className="sv-quote-text">
                                "Hiring ForgeStudio was the single best investment we made that year.
                                They didn't just build us a website — they built us a
                                <strong> competitive advantage we still benefit from daily.</strong>"
                            </p>
                            <div className="sv-quote-meta">
                                <div className="sv-quote-avatar">
                                    <div className="sv-quote-avatar-bg" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(10,10,10,0.8))" }} />
                                    <span style={{ position: "relative", zIndex: 1 }}>M</span>
                                </div>
                                <div>
                                    <div className="sv-quote-name">Marcus Eliott</div>
                                    <div className="sv-quote-role">CEO & Co-founder</div>
                                    <div className="sv-quote-co">Meridian Capital</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── CTA BAND ── */}
                    <div className="sv-cta">
                        <div className="sv-cta-inner">
                            <div className="sv-cta-card">
                                <div className="sv-cta-card-bg">Build</div>
                                <div className="sv-cta-icon">◆</div>
                                <div className="sv-cta-card-title">Ready to get started?</div>
                                <p className="sv-cta-card-desc">
                                    Tell us about your project and we'll reply within 24 hours
                                    with a clear plan and a fair, fixed price. No pitch decks,
                                    no fluff — just a direct conversation.
                                </p>
                                <button className="sv-btn-primary">
                                    <span>Start a Conversation</span>
                                    <span className="sv-btn-arrow">↗</span>
                                </button>
                            </div>
                            <div className="sv-cta-card">
                                <div className="sv-cta-card-bg">Work</div>
                                <div className="sv-cta-icon">○</div>
                                <div className="sv-cta-card-title">Want to see proof first?</div>
                                <p className="sv-cta-card-desc">
                                    Browse our portfolio of 150+ shipped projects across every
                                    service we offer — real outcomes, real clients, real numbers.
                                </p>
                                <button className="sv-btn-ghost">
                                    <span>View Our Work</span>
                                    <span className="sv-btn-ghost-arrow">↗</span>
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