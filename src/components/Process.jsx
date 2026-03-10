import { useState, useEffect, useRef } from "react";
import "../styles/Process.css";
import { LiaShippingFastSolid } from "react-icons/lia";

const steps = [
    {
        num: "01",
        icon: "◇",
        title: "Discovery & Strategy",
        desc: "We start by deeply understanding your business, audience, and goals. Stakeholder interviews, competitive analysis, and a clear strategic brief set the foundation for everything that follows.",
        chips: ["Brief", "Research", "Audit", "Goals"],
        duration: "3–5 days",
        side: "left",
    },
    {
        num: "02",
        icon: "⬡",
        title: "Concept & Architecture",
        desc: "Information architecture, user flows, and initial wireframes take shape. We map every user journey before a single pixel of design is produced — clarity first, aesthetics second.",
        chips: ["Sitemaps", "Wireframes", "User Flows", "IA"],
        duration: "5–7 days",
        side: "right",
    },
    {
        num: "03",
        icon: "◈",
        title: "Design & Prototyping",
        desc: "High-fidelity screens, motion concepts, and interactive prototypes. You'll experience the product before it's built — real interactions, real content, real feedback loops.",
        chips: ["UI Design", "Prototype", "Motion", "Design System"],
        duration: "7–14 days",
        side: "left",
    },
    {
        num: "04",
        icon: "△",
        title: "Development & Build",
        desc: "Production-grade code, engineered for performance and scale. We build in sprints, deploy to staging frequently, and keep you in the loop at every milestone.",
        chips: ["Frontend", "Backend", "CMS", "Testing"],
        duration: "2–6 weeks",
        side: "right",
    },
    {
        num: "05",
        icon: "○",
        title: "QA & Refinement",
        desc: "Rigorous cross-browser testing, accessibility checks, performance audits, and final polish. Nothing ships until it exceeds the standard we set together at the start.",
        chips: ["QA Testing", "Lighthouse", "a11y", "Polish"],
        duration: "3–5 days",
        side: "left",
    },
    {
        num: "06",
        icon: "◆",
        title: "Launch & Growth",
        desc: "A meticulously planned go-live, followed by analytics setup, performance monitoring, and ongoing support. Launch is not the end — it's where the real work begins.",
        chips: ["Deploy", "Analytics", "SEO", "Support"],
        duration: "Ongoing",
        side: "right",
    },
];

export default function Process() {
    const [activeStep, setActiveStep] = useState(null);
    const [spineHeight, setSpineHeight] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            const totalH = timelineRef.current.offsetHeight;
            const visible = Math.max(0, Math.min(windowH - rect.top, totalH));
            const pct = Math.min(100, Math.max(0, (visible / totalH) * 130 - 15));
            setSpineHeight(pct);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="pr-root">
                <div className="pr-blob pr-blob-1" />
                <div className="pr-blob pr-blob-2" />
                <div className="pr-blob pr-blob-3" />
                <div className="pr-grid">
                    <div className="pr-grid-h" style={{ top: "12%" }} />
                    <div className="pr-grid-h" style={{ top: "50%" }} />
                    <div className="pr-grid-h" style={{ top: "82%" }} />
                    <div className="pr-grid-v" style={{ left: "25%" }} />
                    <div className="pr-grid-v" style={{ left: "75%" }} />
                </div>

                <div className="pr-inner">

                    {/* Header */}
                    <div className="pr-header">
                        <div>
                            <div className="pr-eyebrow">
                                <div className="pr-eyebrow-line" />
                                <span className="pr-eyebrow-label">How We Work — Process</span>
                            </div>
                            <h2 className="pr-headline">
                                A process built
                                <br />
                                for <em>clarity</em> and
                                <br />
                                <span className="outline">zero surprises</span>
                            </h2>
                        </div>
                        <div className="pr-header-right">
                            <p className="pr-header-desc">
                                Every great product begins with a disciplined process. Ours
                                is transparent, collaborative, and refined across 150+ projects
                                — so you always know exactly where things stand and what comes next.
                            </p>
                            <div className="pr-header-note">
                                <span className="pr-header-note-icon">◆</span>
                                <p className="pr-header-note-text">
                                    <strong>Typical project duration: 4–10 weeks</strong> —
                                    depending on scope. We provide a detailed timeline in your
                                    first proposal, with no moving goalposts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="pr-timeline" ref={timelineRef}>
                        <div className="pr-spine" />
                        <div
                            className="pr-spine-fill"
                            style={{ height: `${spineHeight}%` }}
                        />

                        {steps.map((step, i) => {
                            const isLeft = step.side === "left";
                            const isActive = activeStep === i;

                            const ContentBlock = (
                                <div className="pr-step-content">
                                    <div className="pr-step-num">
                                        {isLeft
                                            ? <><span>{step.num}</span><div className="pr-step-num-line" /></>
                                            : <><div className="pr-step-num-line" /><span>{step.num}</span></>
                                        }
                                    </div>
                                    <div className="pr-step-title">{step.title}</div>
                                    <div className="pr-step-desc">{step.desc}</div>
                                    <div className="pr-chips">
                                        {step.chips.map((c) => (
                                            <span className="pr-chip" key={c}>{c}</span>
                                        ))}
                                    </div>
                                    <div className="pr-duration">
                                        <div className="pr-duration-dot" />
                                        {step.duration}
                                    </div>
                                </div>
                            );

                            return (
                                <div
                                    className="pr-step"
                                    key={step.num}
                                    onClick={() => setActiveStep(isActive ? null : i)}
                                >
                                    {/* Left side */}
                                    {isLeft
                                        ? <div className="pr-step-left">{ContentBlock}</div>
                                        : <div className="pr-step-empty" />
                                    }

                                    {/* Node */}
                                    <div className="pr-step-node">
                                        <div className={`pr-node${isActive ? " active" : ""}`}>
                                            <span className="pr-node-icon">{step.icon}</span>
                                        </div>
                                        <div className="pr-connector" />
                                    </div>

                                    {/* Right side */}
                                    {!isLeft
                                        ? <div className="pr-step-right">{ContentBlock}</div>
                                        : <div className="pr-step-empty-r" />
                                    }
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom band */}
                    <div className="pr-bottom">
                        <div className="pr-bottom-card">
                            <div className="pr-bottom-card-bg">Fast</div>
                            <div className="pr-bottom-icon"><LiaShippingFastSolid /></div>
                            <div className="pr-bottom-title">Need it faster?</div>
                            <div className="pr-bottom-desc">
                                For urgent launches, our accelerated sprint mode compresses
                                the timeline without cutting corners — dedicated team, daily
                                check-ins, and priority delivery.
                            </div>
                            <button className="pr-bottom-link">
                                Ask about rush projects
                                <span className="pr-bottom-link-arrow">→</span>
                            </button>
                        </div>
                        <div className="pr-bottom-card">
                            <div className="pr-bottom-card-bg">Free</div>
                            <div className="pr-bottom-icon">◈</div>
                            <div className="pr-bottom-title">Free discovery call</div>
                            <div className="pr-bottom-desc">
                                Not sure where to start? Book a free 30-minute call with our
                                lead strategist. No pitch, no pressure — just a clear picture
                                of what your project needs and what it'll cost.
                            </div>
                            <button className="pr-bottom-link">
                                Book your free call
                                <span className="pr-bottom-link-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}