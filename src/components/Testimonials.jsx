import { useState, useEffect, useRef } from "react";
import "../styles/Testimonials.css";

const featured = {
    quote: "WebVerse didn't just build us a website — they built us a \
competitive advantage. Traffic is up 340%, and we're closing deals we \
couldn't even get meetings for before.",
    highlight: "closing deals we couldn't even get meetings for before",
    name: "Marcus Eliott",
    role: "CEO & Co-founder",
    company: "Meridian Capital",
    initial: "M",
    grad: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(10,10,10,0.8))",
};

const cards = [
    {
        text: "Every deadline hit, every detail considered. The team felt like an extension of our own — I've never had a dev partner this communicative.",
        name: "Priya Nambiar",
        role: "Head of Product · Verd",
        initial: "P",
        grad: "linear-gradient(135deg, rgba(74,120,96,0.3), rgba(10,10,10,0.8))",
        tag: "Mobile App",
    },
    {
        text: "They redesigned our entire platform in 6 weeks. The new UI cut our support tickets by 60% in the first month alone. Extraordinary work.",
        name: "James Whitmore",
        role: "CTO · Luminary SaaS",
        initial: "J",
        grad: "linear-gradient(135deg, rgba(80,80,160,0.3), rgba(10,10,10,0.8))",
        tag: "SaaS Platform",
    },
    {
        text: "The attention to performance was something else entirely. Our Lighthouse score went from 41 to 98 — and it shows in every conversion metric.",
        name: "Sofia Delacroix",
        role: "Marketing Director · Atelier",
        initial: "S",
        grad: "linear-gradient(135deg, rgba(160,80,60,0.3), rgba(10,10,10,0.8))",
        tag: "E-Commerce",
    },
    {
        text: "Not just good designers — strategic partners. They challenged our assumptions and delivered something far better than we imagined asking for.",
        name: "Daniel Osei",
        role: "Founder · Pulse Fitness",
        initial: "D",
        grad: "linear-gradient(135deg, rgba(60,120,80,0.3), rgba(10,10,10,0.8))",
        tag: "Web App",
    },
    {
        text: "The brand system they created has become our most valuable asset. Consistent, distinctive, and completely ours. Worth every penny.",
        name: "Nora Kjelberg",
        role: "Creative Director · Studio Noir",
        initial: "N",
        grad: "linear-gradient(135deg, rgba(100,80,140,0.3), rgba(10,10,10,0.8))",
        tag: "Branding",
    },
    {
        text: "I've worked with five agencies in ten years. WebVerse is the only one I've rehired — three times. That should say everything.",
        name: "Tariq Hussain",
        role: "VP Growth · NorthStar",
        initial: "T",
        grad: "linear-gradient(135deg, rgba(160,120,40,0.25), rgba(10,10,10,0.8))",
        tag: "Growth",
    },
];

const logos = [
    { mark: "◆", name: "MeridianCap" },
    { mark: "⬡", name: "Luminary" },
    { mark: "○", name: "Verd" },
    { mark: "◇", name: "Atelier" },
    { mark: "△", name: "Pulse" },
    { mark: "◈", name: "NorthStar" },
    { mark: "◆", name: "Studio Noir" },
    { mark: "⬡", name: "TerraFlow" },
];

function Stars({ n = 5, size = "normal" }) {
    return (
        <div className={size === "large" ? "tm-featured-stars" : "tm-card-stars"}>
            {Array.from({ length: n }).map((_, i) => (
                <span key={i} className="tm-star">★</span>
            ))}
        </div>
    );
}

function Avatar({ initial, grad, size = 64 }) {
    return (
        <div
            className={size === 40 ? "tm-card-avatar" : "tm-avatar"}
            style={{ width: size, height: size }}
        >
            <div
                className={size === 40 ? "tm-card-avatar-grad" : "tm-avatar-grad"}
                style={{ background: grad }}
            />
            {size > 40 && <div className="tm-avatar-ring" />}
            <span style={{ position: "relative", zIndex: 1 }}>{initial}</span>
        </div>
    );
}

export default function Testimonials() {
    const [activeDot, setActiveDot] = useState(0);
    const allLogos = [...logos, ...logos];

    return (
        <>
            <section className="tm-root">
                <div className="tm-blob tm-blob-1" />
                <div className="tm-blob tm-blob-2" />
                <div className="tm-blob tm-blob-3" />
                <div className="tm-grid">
                    <div className="tm-grid-h" style={{ top: "14%" }} />
                    <div className="tm-grid-h" style={{ top: "48%" }} />
                    <div className="tm-grid-h" style={{ top: "80%" }} />
                    <div className="tm-grid-v" style={{ left: "25%" }} />
                    <div className="tm-grid-v" style={{ left: "75%" }} />
                </div>

                <div className="tm-inner">

                    {/* Header */}
                    <div className="tm-header">
                        <div>
                            <div className="tm-eyebrow">
                                <div className="tm-eyebrow-line" />
                                <span className="tm-eyebrow-label">Client Stories — Testimonials</span>
                            </div>
                            <h2 className="tm-headline">
                                Trusted by those
                                <br />
                                who <em>demand</em>
                                <br />
                                <span className="outline">the best</span>
                            </h2>
                        </div>
                        <div className="tm-header-right">
                            <p className="tm-header-desc">
                                We let our clients do the talking. These are real words from
                                real businesses that trusted us with their most important
                                digital presence.
                            </p>
                            <div className="tm-rating-summary">
                                <div className="tm-rating-num">4.9<span>/5</span></div>
                                <div className="tm-rating-right">
                                    <Stars n={5} size="normal" />
                                    <div className="tm-rating-label">Avg. across 200+ reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured quote */}
                    <div className="tm-featured">
                        <div className="tm-big-quote">"</div>
                        <div className="tm-featured-inner">
                            <div>
                                <Stars n={5} size="large" />
                                <p
                                    className="tm-featured-quote"
                                    style={{ marginTop: "1.4rem" }}
                                    dangerouslySetInnerHTML={{
                                        __html: `"${featured.quote.replace(
                                            featured.highlight,
                                            `<strong>${featured.highlight}</strong>`
                                        )}"`,
                                    }}
                                />
                            </div>
                            <div className="tm-featured-meta">
                                <Avatar initial={featured.initial} grad={featured.grad} size={64} />
                                <div>
                                    <div className="tm-meta-name">{featured.name}</div>
                                    <div className="tm-meta-role">{featured.role}</div>
                                    <div className="tm-meta-company">{featured.company}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="tm-grid-cards">
                        {cards.map((c, i) => (
                            <div className="tm-card" key={i}>
                                <span className="tm-card-quote-mark">"</span>
                                <span className="tm-card-tag">{c.tag}</span>
                                <p className="tm-card-text">"{c.text}"</p>
                                <div className="tm-card-footer">
                                    <Avatar initial={c.initial} grad={c.grad} size={40} />
                                    <div>
                                        <div className="tm-card-name">{c.name}</div>
                                        <div className="tm-card-role">{c.role}</div>
                                    </div>
                                    <Stars n={5} size="small" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logos marquee */}
                    <div className="tm-logos">
                        <div className="tm-logos-label">Trusted by ambitious teams worldwide</div>
                        <div className="tm-logos-track">
                            {allLogos.map((l, i) => (
                                <div className="tm-logo-item" key={i}>
                                    <span className="tm-logo-mark">{l.mark}</span>
                                    <span className="tm-logo-name">{l.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot nav */}
                    <div className="tm-nav">
                        {[0, 1, 2, 3].map((i) => (
                            <button
                                key={i}
                                className={`tm-dot${activeDot === i ? " active" : ""}`}
                                onClick={() => setActiveDot(i)}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}