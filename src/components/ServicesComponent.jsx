import { useState, useEffect, useRef } from "react";
import "../styles/ServicesComponent.css";
const services = [
    {
        num: "01",
        icon: "⬡",
        name: "Custom Website Development",
        tags: ["HTML/CSS", "React", "Next.js"],
        desc: "We design and engineer bespoke websites tailored to your brand's exact needs — from pixel-perfect marketing sites to complex multi-page platforms. Every site is handcrafted, not templated, and built to perform.",
        features: [
            "Fully custom design — no templates",
            "Responsive across all screen sizes",
            "CMS integration (Sanity, Contentful, Strapi)",
            "SEO-optimized structure from day one",
            "Lightning-fast Core Web Vitals scores",
        ],
    },
    {
        num: "02",
        icon: "◈",
        name: "Web & Mobile App Development",
        tags: ["React Native", "Node.js", "API"],
        desc: "Full-stack applications built for scale — intuitive interfaces paired with robust, secure backends. We ship products that users actually want to use, on web and on mobile.",
        features: [
            "React, Next.js & Node.js stack",
            "Cross-platform iOS & Android apps",
            "REST & GraphQL API architecture",
            "Real-time features and push notifications",
            "Scalable cloud deployment (Vercel, AWS)",
        ],
    },
    {
        num: "03",
        icon: "◇",
        name: "Modern UI/UX Design",
        tags: ["Figma", "Motion", "Systems"],
        desc: "Design that converts and delights. We create cohesive visual systems — from user research and wireframes through to polished interfaces with micro-interactions that make your product feel alive.",
        features: [
            "User research & journey mapping",
            "Wireframes, prototypes & user testing",
            "Design systems & component libraries",
            "Motion design & micro-interactions",
            "Accessibility-first (WCAG 2.1 AA)",
        ],
    },
    {
        num: "04",
        icon: "△",
        name: "Performance & Security",
        tags: ["Audit", "Speed", "SSL/TLS"],
        desc: "We audit, optimize, and harden your existing digital presence. Speed improvements of 2–5× are common. Every deployment follows security best practices to protect your users and your reputation.",
        features: [
            "Lighthouse & Core Web Vitals audit",
            "Image, code & network optimization",
            "SSL, CSP & OWASP security hardening",
            "CDN setup and edge caching strategy",
            "Ongoing monitoring & incident support",
        ],
    },
    {
        num: "05",
        icon: "○",
        name: "Digital Growth Solutions",
        tags: ["Strategy", "Analytics", "SEO"],
        desc: "We don't just build — we help businesses grow online. From conversion rate optimization to analytics setup and digital strategy, we give you the tools and insights to reach more customers and keep them.",
        features: [
            "Conversion rate optimization (CRO)",
            "Analytics & event tracking (GA4, Plausible)",
            "Technical SEO & schema markup",
            "A/B testing and growth experiments",
            "Ongoing consulting & growth roadmap",
        ],
    },
];

export default function ServicesComponent() {
    const [active, setActive] = useState(0);

    const toggle = (i) => setActive(active === i ? null : i);

    return (
        <>
            <section className="svc-root">
                <div className="svc-blob svc-blob-1" />
                <div className="svc-blob svc-blob-2" />
                <div className="svc-grid">
                    <div className="svc-grid-h" style={{ top: "20%" }} />
                    <div className="svc-grid-h" style={{ top: "60%" }} />
                    <div className="svc-grid-h" style={{ top: "85%" }} />
                    <div className="svc-grid-v" style={{ left: "25%" }} />
                    <div className="svc-grid-v" style={{ left: "75%" }} />
                </div>

                <div className="svc-inner">
                    {/* Header */}
                    <div className="svc-header">
                        <div>
                            <div className="svc-eyebrow">
                                <div className="svc-eyebrow-line" />
                                <span className="svc-eyebrow-label">What We Do — Services</span>
                            </div>
                            <h2 className="svc-headline">
                                Craft that drives
                                <br />
                                <em>real</em> business
                                <br />
                                <span className="outline">results</span>
                            </h2>
                        </div>
                        <div className="svc-header-right">
                            <p>
                                Every service we offer exists for one reason: to grow your
                                business online. We combine rigorous craft with strategic
                                thinking to deliver digital products that don't just look
                                good — they perform.
                            </p>
                            <button className="svc-header-cta">
                                See all case studies
                                <span className="svc-cta-arrow">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="svc-divider" />

                    {/* Accordion list */}
                    <ul className="svc-list">
                        {services.map((svc, i) => (
                            <li
                                key={svc.num}
                                className={`svc-item${active === i ? " active" : ""}`}
                                onClick={() => toggle(i)}
                            >
                                <div className="svc-item-header">
                                    <span className="svc-num">{svc.num}</span>

                                    <div className="svc-title-wrap">
                                        <div className="svc-icon-badge">{svc.icon}</div>
                                        <span className="svc-name">{svc.name}</span>
                                    </div>

                                    <div className="svc-tags">
                                        {svc.tags.map((t) => (
                                            <span className="svc-tag" key={t}>{t}</span>
                                        ))}
                                    </div>

                                    <div className="svc-toggle">+</div>
                                </div>

                                <div className="svc-panel">
                                    <div className="svc-panel-inner">
                                        <div className="svc-panel-content">
                                            <p className="svc-panel-desc">{svc.desc}</p>
                                            <ul className="svc-features">
                                                {svc.features.map((f) => (
                                                    <li className="svc-feature" key={f}>{f}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Philosophy strip */}
                    <div className="svc-philosophy">
                        <div className="svc-philo-item">
                            <div className="svc-philo-icon">◆</div>
                            <div className="svc-philo-title">Craft Over Templates</div>
                            <div className="svc-philo-text">Every pixel is intentional. We never use themes or shortcuts that compromise quality.</div>
                        </div>
                        <div className="svc-divider-v" />
                        <div className="svc-philo-item">
                            <div className="svc-philo-icon">⬡</div>
                            <div className="svc-philo-title">Performance by Default</div>
                            <div className="svc-philo-text">Speed and accessibility aren't afterthoughts — they're baked into every line of code we ship.</div>
                        </div>
                        <div className="svc-divider-v" />
                        <div className="svc-philo-item">
                            <div className="svc-philo-icon">○</div>
                            <div className="svc-philo-title">Growth-Oriented</div>
                            <div className="svc-philo-text">We measure success by your results — more leads, more sales, stronger brand presence online.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}