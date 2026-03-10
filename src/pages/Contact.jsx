import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/Contact.css";
const faqs = [
    {
        q: "How quickly will you respond to my enquiry?",
        a: "Every submission gets a personal reply within 24 hours on business days — usually much sooner. You'll always hear from a senior member of the team, never an automated sequence.",
    },
    {
        q: "What does a typical project cost?",
        a: "Website projects typically start from €8,000. Full-stack web applications from €18,000. We always provide a detailed, fixed-price proposal before any work begins — no surprises, ever.",
    },
    {
        q: "How long does a project take?",
        a: "Most websites take 4–6 weeks from kickoff to launch. More complex applications typically run 8–14 weeks. We'll give you a precise timeline in our proposal after understanding your scope.",
    },
    {
        q: "Do you work with clients outside Europe?",
        a: "Absolutely. Our team is fully remote and we've shipped projects for clients across North America, the Middle East, Southeast Asia and beyond. Time zones have never been an obstacle.",
    },
    {
        q: "Can you help if we already have a design?",
        a: "Yes — pure development engagements are something we take on selectively when the design quality meets our standards. We're happy to review your existing work during a discovery call.",
    },
];

const contactCards = [
    { icon: "◈", label: "Email us directly", value: "hello@forgestudio.co", href: "mailto:hello@forgestudio.co" },
    { icon: "○", label: "Book a call", value: "calendly.com/forgestudio", href: "#" },
    { icon: "⬡", label: "LinkedIn", value: "linkedin.com/company/forgestudio", href: "#" },
];

const socials = ["𝕏", "in", "↗", "◈"];

const budgets = [
    "Under €5,000",
    "€5,000 – €15,000",
    "€15,000 – €40,000",
    "€40,000+",
    "Not sure yet",
];

const services = [
    "Custom Website",
    "Web Application",
    "Mobile App",
    "UI/UX Design",
    "Performance Audit",
    "Brand Identity",
    "Other",
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    const [sent, setSent] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [pathname])
    const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = () => {
        if (form.name && form.email && form.message) setSent(true);
    };

    return (
        <>
            <div className="ct-root">
                {/* Background */}
                <div className="ct-blob ct-blob-1" />
                <div className="ct-blob ct-blob-2" />
                <div className="ct-blob ct-blob-3" />
                <div className="ct-grid">
                    <div className="ct-grid-h" style={{ top: "18%" }} />
                    <div className="ct-grid-h" style={{ top: "46%" }} />
                    <div className="ct-grid-h" style={{ top: "74%" }} />
                    <div className="ct-grid-v" style={{ left: "25%" }} />
                    <div className="ct-grid-v" style={{ left: "50%" }} />
                    <div className="ct-grid-v" style={{ left: "75%" }} />
                </div>

                <Navbar />

                <div className="ct-page">

                    {/* ── HERO ── */}
                    <div className="ct-hero">
                        <div>
                            <div className="ct-eyebrow">
                                <div className="ct-eyebrow-line" />
                                <span className="ct-eyebrow-label">Get In Touch — Contact</span>
                            </div>
                            <h1 className="ct-headline">
                                Let's build
                                <br />
                                something
                                <br />
                                <em>remarkable</em>
                                <br />
                                <span className="outline">together</span>
                            </h1>
                        </div>
                        <div className="ct-hero-right">
                            <p className="ct-hero-desc">
                                Every great project starts with a conversation. Tell us what
                                you're working on and we'll come back with a clear plan,
                                honest timeline, and a fair price — within 24 hours.
                            </p>
                            <div className="ct-promises">
                                {[
                                    { icon: "◆", text: <><strong>Reply within 24 hours</strong> — always from a senior team member, never a bot.</> },
                                    { icon: "○", text: <><strong>Free 30-min discovery call</strong> — no pitch, just a clear picture of what your project needs.</> },
                                    { icon: "◇", text: <><strong>Fixed-price proposals</strong> — no hourly billing surprises, ever.</> },
                                ].map((p, i) => (
                                    <div className="ct-promise" key={i}>
                                        <div className="ct-promise-icon">{p.icon}</div>
                                        <p className="ct-promise-text">{p.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── MAIN ── */}
                    <div className="ct-main">

                        {/* Form */}
                        <div className="ct-form-wrap">
                            <div className="ct-form-label-row">
                                <div className="ct-eyebrow-line" style={{ flexShrink: 0 }} />
                                <span className="ct-form-section-label">Tell us about your project</span>
                                <div className="ct-form-section-line" />
                            </div>

                            {sent ? (
                                <div className="ct-success">
                                    <div className="ct-success-icon">✓</div>
                                    <div className="ct-success-title">Message received</div>
                                    <p className="ct-success-desc">
                                        Thank you, {form.name.split(" ")[0]}. We'll be in touch within
                                        24 hours with next steps. Check your inbox.
                                    </p>
                                </div>
                            ) : (
                                <div className="ct-form">
                                    {/* Row 1 */}
                                    <div className="ct-field-row">
                                        <div className="ct-field">
                                            <label className="ct-field-label">Full Name *</label>
                                            <input className="ct-input" placeholder="Lena Marchetti" value={form.name} onChange={e => update("name", e.target.value)} />
                                        </div>
                                        <div className="ct-field">
                                            <label className="ct-field-label">Email Address *</label>
                                            <input className="ct-input" type="email" placeholder="lena@company.com" value={form.email} onChange={e => update("email", e.target.value)} />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="ct-field-row">
                                        <div className="ct-field">
                                            <label className="ct-field-label">Company / Project</label>
                                            <input className="ct-input" placeholder="Acme Inc." value={form.company} onChange={e => update("company", e.target.value)} />
                                        </div>
                                        <div className="ct-field">
                                            <label className="ct-field-label">Service Needed</label>
                                            <select className="ct-select ct-input" value={form.service} onChange={e => update("service", e.target.value)}>
                                                <option value="">Select a service…</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 3 — full width */}
                                    <div className="ct-field" style={{ borderBottom: "none" }}>
                                        <label className="ct-field-label">Estimated Budget</label>
                                        <select className="ct-select ct-input" value={form.budget} onChange={e => update("budget", e.target.value)}>
                                            <option value="">Select a range…</option>
                                            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="ct-field" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                                        <label className="ct-field-label">Tell us about your project *</label>
                                        <textarea className="ct-textarea" placeholder="What are you building, what's the challenge, and what does success look like for you?" value={form.message} onChange={e => update("message", e.target.value)} />
                                    </div>

                                    <div className="ct-form-bottom">
                                        <p className="ct-form-note">
                                            We respect your privacy. Your details are never shared
                                            and only used to respond to your enquiry. <span>No spam, ever.</span>
                                        </p>
                                        <button className="ct-submit-btn" onClick={handleSubmit}>
                                            <span>Send Message</span>
                                            <span className="ct-submit-btn-arrow">↗</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="ct-info">
                            <div className="ct-form-label-row">
                                <div className="ct-eyebrow-line" style={{ flexShrink: 0 }} />
                                <span className="ct-form-section-label">Direct channels</span>
                                <div className="ct-form-section-line" />
                            </div>

                            {/* Contact cards */}
                            <div className="ct-contact-cards">
                                {contactCards.map((c) => (
                                    <a className="ct-contact-card" href={c.href} key={c.label}>
                                        <div className="ct-contact-card-icon">{c.icon}</div>
                                        <div>
                                            <div className="ct-contact-card-label">{c.label}</div>
                                            <div className="ct-contact-card-value">{c.value}</div>
                                        </div>
                                        <span className="ct-contact-card-arrow">↗</span>
                                    </a>
                                ))}
                            </div>

                            {/* Availability info */}
                            <div className="ct-info-block">
                                <div className="ct-info-block-header">
                                    <div className="ct-status">
                                        <div className="ct-status-dot" />
                                        Currently accepting new projects
                                    </div>
                                </div>
                                <div className="ct-info-block-body">
                                    {[
                                        { label: "Studio hours", value: "Mon–Fri, 09:00–18:00 CET" },
                                        { label: "Response time", value: "< 24 hours", cls: "gold" },
                                        { label: "Next availability", value: "2 weeks from today", cls: "gold" },
                                        { label: "Preferred contact", value: "Email or discovery call" },
                                        { label: "Languages", value: "English, French, German" },
                                    ].map((r) => (
                                        <div className="ct-info-row" key={r.label}>
                                            <span className="ct-info-row-label">{r.label}</span>
                                            <span className={`ct-info-row-value${r.cls ? ` ${r.cls}` : ""}`}>{r.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Socials */}
                            <div>
                                <div className="ct-form-label-row" style={{ marginBottom: "1rem" }}>
                                    <div className="ct-eyebrow-line" style={{ flexShrink: 0 }} />
                                    <span className="ct-form-section-label">Follow our work</span>
                                    <div className="ct-form-section-line" />
                                </div>
                                <div className="ct-socials-row">
                                    {socials.map((s, i) => (
                                        <a className="ct-social" href="#" key={i}>{s}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── FAQ ── */}
                    <div className="ct-faq-wrap">
                        <div className="ct-faq-header">
                            <div>
                                <div className="ct-eyebrow" style={{ animation: "none", opacity: 1 }}>
                                    <div className="ct-eyebrow-line" />
                                    <span className="ct-eyebrow-label">Before you reach out</span>
                                </div>
                                <h2 className="ct-faq-headline">
                                    Common <em>questions</em>,<br />honest answers
                                </h2>
                            </div>
                            <p className="ct-faq-desc">
                                If you have a question not covered here, just include it in your
                                message and we'll address it directly in our reply.
                            </p>
                        </div>
                        <div className="ct-faq-list">
                            {faqs.map((f, i) => (
                                <div
                                    className={`ct-faq-item${openFaq === i ? " open" : ""}`}
                                    key={i}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="ct-faq-q">
                                        <span className="ct-faq-q-text">{f.q}</span>
                                        <div className="ct-faq-toggle">+</div>
                                    </div>
                                    <div className="ct-faq-answer">
                                        <div className="ct-faq-answer-inner">
                                            <p className="ct-faq-answer-text">{f.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    );
}