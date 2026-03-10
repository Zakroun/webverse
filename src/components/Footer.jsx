import { useState } from "react";
import "../styles/Footer.css";

const navCols = [
    {
        title: "Company",
        links: ["About Us", "Our Work", "Case Studies", "Journal", "Careers"],
    },
    {
        title: "Services",
        links: ["Website Development", "App Development", "UI/UX Design", "Performance & Security", "Growth Solutions"],
    },
    {
        title: "Connect",
        links: ["hello@webverse.com", "Book a Call", "LinkedIn", "Dribbble", "GitHub"],
    },
];

const socials = ["𝕏", "in", "↗", "◈"];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = () => {
        if (email.includes("@")) { setSent(true); setEmail(""); }
    };

    return (
        <>
            <footer className="ft-root">
                <div className="ft-blob ft-blob-1" />
                <div className="ft-blob ft-blob-2" />
                <div className="ft-grid">
                    <div className="ft-grid-h" style={{ top: "18%" }} />
                    <div className="ft-grid-h" style={{ top: "52%" }} />
                    <div className="ft-grid-v" style={{ left: "25%" }} />
                    <div className="ft-grid-v" style={{ left: "75%" }} />
                </div>

                {/* ── CTA Banner ── */}
                <div className="ft-cta-band">
                    <div className="ft-cta-bg-text">Let's Build</div>
                    <div className="ft-cta-left">
                        <div className="ft-cta-eyebrow">
                            <div className="ft-cta-eyebrow-line" />
                            <span className="ft-cta-eyebrow-label">Ready to start?</span>
                        </div>
                        <h2 className="ft-cta-headline">
                            Let's build something
                            <br />
                            <em>remarkable</em> together
                        </h2>
                    </div>
                    <div className="ft-cta-right">
                        <p className="ft-cta-sub">
                            Tell us about your project and we'll get back within 24 hours with
                            a clear plan and a fair quote.
                        </p>
                        <button className="ft-btn-primary">
                            <span>Start a Conversation →</span>
                        </button>
                    </div>
                </div>

                {/* ── Main body ── */}
                <div className="ft-body">
                    {/* Brand col */}
                    <div className="ft-brand-col">
                        <div className="ft-brand-logo">◆ <span>Web</span>Verse</div>
                        <p className="ft-brand-desc">
                            A boutique digital studio crafting high-performance websites,
                            applications, and brand experiences for ambitious businesses
                            worldwide.
                        </p>

                        <div className="ft-newsletter-label">Stay in the loop</div>
                        <div className="ft-newsletter-form">
                            <input
                                className="ft-newsletter-input"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            />
                            <button className="ft-newsletter-btn" onClick={handleSubmit}>
                                {sent ? "✓" : "→"}
                            </button>
                        </div>

                        <div className="ft-socials">
                            {socials.map((s, i) => (
                                <a key={i} className="ft-social-link" href="#">{s}</a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {navCols.map((col) => (
                        <div key={col.title}>
                            <div className="ft-nav-title">{col.title}</div>
                            <ul className="ft-nav-list">
                                {col.links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="ft-bottom">
                    <div className="ft-bottom-left">
                        <span className="ft-copy">
                            © 2025 <span>WebVerse</span>. All rights reserved.
                        </span>
                        <div className="ft-bottom-links">
                            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
                                <a key={l} href="#">{l}</a>
                            ))}
                        </div>
                    </div>
                    <div className="ft-bottom-right">
                        <div className="ft-status-dot" />
                        All systems operational
                    </div>
                </div>

                {/* ── Giant wordmark ── */}
                <div className="ft-wordmark-wrap">
                    <span className="ft-wordmark">WebVerse</span>
                </div>
            </footer>
        </>
    );
}