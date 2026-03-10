import { useEffect, useRef, useState } from "react";
import { GiStack } from "react-icons/gi";
import { FaDesktop } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import "../styles/HeroSection.css";

const tickerItems = [
    "Custom Website Development",
    "Web App & Mobile Solutions",
    "Modern UI/UX Design",
    "Performance Optimization",
    "Digital Growth Strategy",
    "Security & Scalability",
    "Custom Website Development",
    "Web App & Mobile Solutions",
    "Modern UI/UX Design",
    "Performance Optimization",
    "Digital Growth Strategy",
    "Security & Scalability",
];

export default function HeroSection() {
    const [counter, setCounter] = useState({ projects: 0, clients: 0, rate: 0 });
    
    useEffect(() => {
        const duration = 2000;
        const targets = { projects: 250, clients: 180, rate: 99 };
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounter({
                projects: Math.floor(ease * targets.projects),
                clients: Math.floor(ease * targets.clients),
                rate: Math.floor(ease * targets.rate),
            });
            if (progress < 1) requestAnimationFrame(tick);
        };
        const timeout = setTimeout(() => requestAnimationFrame(tick), 1200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <section className="hero">
                <div className="blob blob-1" />
                <div className="blob blob-2" />
                <div className="blob blob-3" />
                <div className="geo-lines">
                    <div className="geo-line" style={{ top: "30%", width: "100%" }} />
                    <div className="geo-line" style={{ top: "65%", width: "100%" }} />
                    <div className="geo-line-v" style={{ left: "50%", height: "100%" }} />
                    <div className="geo-line-v" style={{ left: "25%", height: "100%" }} />
                    <div className="geo-line-v" style={{ left: "75%", height: "100%" }} />
                </div>
                <div className="hero-main">
                    <div className="hero-left">
                        <div className="eyebrow">
                            <div className="eyebrow-line" />
                            <span className="eyebrow-text">Digital Agency — Building for the Modern Web</span>
                        </div>
                        <h1 className="hero-headline">
                            We build
                            <br />
                            <em>modern</em> digital
                            <br />
                            <span className="outline-text">experiences</span>
                        </h1>
                        <p className="hero-subtext">
                            WebVerse is a digital agency specialized in building modern websites, 
                            web applications, and mobile solutions. We help businesses establish 
                            a strong online presence through innovative design and high-performance 
                            development tailored to the evolving digital landscape.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-primary">
                                <span>Start Your Project</span>
                            </button>
                            <button className="btn-ghost">
                                See Our Work
                                <span className="btn-ghost-arrow">→</span>
                            </button>
                        </div>
                        <div className="hero-metrics">
                            <div className="metric">
                                <div className="metric-num">{counter.projects}<span>+</span></div>
                                <div className="metric-label">Projects Delivered</div>
                            </div>
                            <div className="metric">
                                <div className="metric-num">{counter.clients}<span>+</span></div>
                                <div className="metric-label">Businesses Served</div>
                            </div>
                            <div className="metric">
                                <div className="metric-num">{counter.rate}<span>%</span></div>
                                <div className="metric-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="showcase-card showcase-featured">
                            <div className="featured-badge">Featured Project</div>
                            <div className="featured-icon"><GiStack/></div>
                            <div className="featured-label">Latest Work</div>
                            <div className="featured-title">MarketPro Analytics</div>
                            <div className="featured-desc">
                                A comprehensive web application for real-time market analytics, 
                                featuring interactive dashboards and AI-powered insights for growing businesses.
                            </div>
                            <div className="featured-num">01</div>
                        </div>
                        {[
                            {
                                icon: <MdDesignServices />,
                                label: "UI / UX Design",
                                title: "Modern Interface Design",
                                desc: "User-centered design that combines aesthetics with functionality for engaging digital experiences.",
                            },
                            {
                                icon: <FaDesktop />,
                                label: "Development",
                                title: "Full-Stack Web Solutions",
                                desc: "React, Next.js, and scalable architectures built for performance and growth.",
                            },
                        ].map((card) => (
                            <div className="showcase-card" key={card.title}>
                                <div className="showcase-card-inner">
                                    <div className="showcase-card-img">
                                        <span className="showcase-icon">{card.icon}</span>
                                    </div>
                                    <div className="showcase-card-info">
                                        <div className="showcase-card-label">{card.label}</div>
                                        <div className="showcase-card-title">{card.title}</div>
                                        <div className="showcase-card-desc">{card.desc}</div>
                                    </div>
                                    <div className="showcase-card-arrow">→</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ticker-wrap">
                    <div className="ticker">
                        {tickerItems.map((item, i) => (
                            <div className="ticker-item" key={i}>
                                <div className="ticker-dot" />
                                <span className="ticker-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}