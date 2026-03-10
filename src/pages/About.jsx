import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "../styles/About.css";

const stats = [
    { icon: "◆", num: "150", suf: "+", label: "Projects shipped" },
    { icon: "⬡", num: "6", suf: "yrs", label: "In the craft" },
    { icon: "○", num: "200", suf: "+", label: "Happy clients" },
    { icon: "◇", num: "98", suf: "%", label: "On-time delivery" },
];

const values = [
    { icon: "◆", num: "01", title: "Craft Over Output", desc: "We don't ship fast and apologise later. Every deliverable is something we'd be proud to put our name on — regardless of deadline pressure." },
    { icon: "⬡", num: "02", title: "Transparency Always", desc: "No hidden costs, no scope creep surprises. We tell you what things cost, why decisions are made, and where your project stands — every single day." },
    { icon: "◈", num: "03", title: "Results, Not Accolades", desc: "We measure success by your growth — traffic, conversions, and revenue — not by awards. Beautiful work that doesn't perform is a failure to us." },
    { icon: "△", num: "04", title: "Deep Collaboration", desc: "Your team knows your business better than we ever will. We bring the digital expertise; you bring the context. The best work lives at that intersection." },
    { icon: "○", num: "05", title: "Relentless Curiosity", desc: "We stay obsessive about the web because we genuinely love it. The latest performance APIs, emerging design patterns, new browser capabilities — we live here." },
    { icon: "◇", num: "06", title: "Long-term Thinking", desc: "We'd rather build something that lasts five years than something that wows for five minutes. Every decision is made with your future in mind." },
];

const team = [
    { initial: "L", name: "Lena Marchetti", role: "Creative Director", bio: "Former lead at Pentagram. 12 years shaping digital brands.", grad: "linear-gradient(160deg, #1a0e06 0%, #0d0804 100%)" },
    { initial: "K", name: "Kai Okonkwo", role: "Lead Engineer", bio: "Ex-Vercel. Built platforms serving 10M+ monthly users.", grad: "linear-gradient(160deg, #060e1a 0%, #04080d 100%)" },
    { initial: "S", name: "Sora Tanaka", role: "UX Strategist", bio: "Research-led design across fintech, health & e-commerce.", grad: "linear-gradient(160deg, #0a0614 0%, #06040a 100%)" },
    { initial: "R", name: "Rami Haddad", role: "Motion & Interaction", bio: "Brings interfaces to life with purposeful, precise motion.", grad: "linear-gradient(160deg, #140608 0%, #0a0305 100%)" },
];

const milestones = [
    { year: "2019", title: "Founded in a small studio in Berlin", desc: "Two designers and a developer, one shared belief: that the web deserved more intentional craft." },
    { year: "2020", title: "First 20 clients — 100% referrals", desc: "We never ran an ad. Every project came from a recommendation. That told us we were onto something." },
    { year: "2021", title: "Expanded to a team of 8", desc: "Added engineering, strategy, and motion disciplines. Shipped our first enterprise platform." },
    { year: "2022", title: "Launched our Design System practice", desc: "Helping fast-moving companies build consistent, scalable visual languages from the ground up." },
    { year: "2023", title: "Crossed 100 shipped projects", desc: "150+ clients across 40+ industries. Not one missed deadline. Still zero paid advertising." },
    { year: "2024", title: "Remote-first, globally distributed", desc: "Team spans Berlin, Lagos, Tokyo, and Montreal. Asynchronous by design, synchronised in craft." },
];

export default function About() {
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
            <div className="ab-root">
                {/* Background */}
                <div className="ab-blob ab-blob-1" />
                <div className="ab-blob ab-blob-2" />
                <div className="ab-blob ab-blob-3" />
                <div className="ab-grid">
                    <div className="ab-grid-h" style={{ top: "15%" }} />
                    <div className="ab-grid-h" style={{ top: "38%" }} />
                    <div className="ab-grid-h" style={{ top: "62%" }} />
                    <div className="ab-grid-h" style={{ top: "85%" }} />
                    <div className="ab-grid-v" style={{ left: "25%" }} />
                    <div className="ab-grid-v" style={{ left: "50%" }} />
                    <div className="ab-grid-v" style={{ left: "75%" }} />
                </div>

                <Navbar />

                {/* ── HERO ── */}
                <div className="ab-hero">
                    <div className="ab-hero-left">
                        <div className="ab-eyebrow">
                            <div className="ab-eyebrow-line" />
                            <span className="ab-eyebrow-label">About Us — Our Story</span>
                        </div>
                        <h1 className="ab-hero-headline">
                            A studio that
                            <br />
                            <em>obsesses</em> over
                            <br />
                            <span className="outline">the details</span>
                        </h1>
                        <p className="ab-hero-sub">
                            ForgeStudio was built on a simple conviction: the internet is too
                            important to be left to mediocre design. We're a small, senior team
                            of designers, engineers and strategists who refuse to compromise on craft.
                        </p>
                        <div className="ab-hero-cta">
                            <button className="ab-btn-primary"><span>Work With Us</span></button>
                            <button className="ab-btn-ghost">
                                Our Process
                                <span className="ab-btn-ghost-arrow">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="ab-hero-right">
                        {stats.map((s) => (
                            <div className="ab-hero-stat-card" key={s.label}>
                                <div className="ab-stat-icon">{s.icon}</div>
                                <div>
                                    <div className="ab-stat-num">{s.num}<span>{s.suf}</span></div>
                                    <div className="ab-stat-label">{s.label}</div>
                                </div>
                            </div>
                        ))}
                        <div className="ab-hero-founded">
                            <div className="ab-founded-year">2019</div>
                            <p className="ab-founded-text">
                                <strong>Founded in Berlin.</strong> Grown through referrals alone.
                                Still independent, still obsessed with doing the best work of our careers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── STORY ── */}
                <div className="ab-section-divider"><div className="ab-divider-line" /></div>
                <div className="ab-section">
                    <div className="ab-story">
                        <div className="ab-story-visual">
                            <div className="ab-story-img-wrap">
                                <div className="ab-story-img-shapes">
                                    {[320, 220, 130].map((s, i) => (
                                        <div key={i} className="ab-story-ring" style={{ width: s, height: s }} />
                                    ))}
                                    <span className="ab-story-center-icon">◆</span>
                                </div>
                            </div>
                            <div className="ab-story-badge">
                                <span className="ab-story-badge-num">6+</span>
                                <span className="ab-story-badge-label">Years of craft</span>
                            </div>
                        </div>
                        <div className="ab-story-content">
                            <div className="ab-section-eyebrow">
                                <div className="ab-section-eyebrow-line" />
                                <span className="ab-section-eyebrow-label">The Story</span>
                            </div>
                            <h2 className="ab-section-headline">
                                Built from a belief
                                <br />
                                the web could be
                                <br />
                                <em>far better</em>
                            </h2>
                            <p className="ab-story-body">
                                ForgeStudio began in 2019 when our founders — frustrated by the
                                gap between what was possible and what was being built — decided
                                to create the studio they wished existed. No bloated process,
                                no junior-heavy teams, no compromises in quality.
                            </p>
                            <blockquote className="ab-story-pull">
                                "We wanted to prove that small teams, given the right constraints
                                and the right standards, produce the best work."
                            </blockquote>
                            <p className="ab-story-body">
                                Six years later, we've shipped over 150 projects across four
                                continents — and every single one came through referral. We've
                                never run an ad. Our reputation is our only growth channel, and
                                we intend to keep it that way.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── VALUES ── */}
                <div className="ab-section-divider"><div className="ab-divider-line" /></div>
                <div className="ab-section">
                    <div className="ab-section-eyebrow">
                        <div className="ab-section-eyebrow-line" />
                        <span className="ab-section-eyebrow-label">What We Stand For</span>
                    </div>
                    <h2 className="ab-section-headline">
                        The principles that
                        <br />
                        <em>guide</em> every
                        <br />
                        <span className="outline">decision we make</span>
                    </h2>
                    <div className="ab-values-grid">
                        {values.map((v) => (
                            <div className="ab-value-card" key={v.num}>
                                <span className="ab-value-icon">{v.icon}</span>
                                <div className="ab-value-title">{v.title}</div>
                                <div className="ab-value-desc">{v.desc}</div>
                                <div className="ab-value-num">{v.num}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── TEAM ── */}
                <div className="ab-section-divider"><div className="ab-divider-line" /></div>
                <div className="ab-section">
                    <div className="ab-team-header">
                        <div>
                            <div className="ab-section-eyebrow">
                                <div className="ab-section-eyebrow-line" />
                                <span className="ab-section-eyebrow-label">The People</span>
                            </div>
                            <h2 className="ab-section-headline">
                                Senior talent,
                                <br />
                                <em>zero</em> fluff
                            </h2>
                        </div>
                        <p className="ab-team-desc">
                            No interns, no junior handoffs. Every project is led and delivered
                            by senior people who've done this before — and care deeply about
                            doing it well.
                        </p>
                    </div>
                    <div className="ab-team-grid">
                        {team.map((m) => (
                            <div className="ab-team-card" key={m.name}>
                                <div className="ab-team-portrait">
                                    <div className="ab-team-portrait-bg" style={{ background: m.grad, position: "absolute", inset: 0 }} />
                                    <div className="ab-team-portrait-shapes">
                                        {[200, 130, 70].map((s, i) => (
                                            <div key={i} className="ab-team-portrait-ring" style={{ width: s, height: s }} />
                                        ))}
                                        <span className="ab-team-portrait-initial">{m.initial}</span>
                                    </div>
                                    <div className="ab-team-overlay" />
                                    <div className="ab-team-info">
                                        <div className="ab-team-role-tag">{m.role}</div>
                                        <div className="ab-team-name">{m.name}</div>
                                        <div className="ab-team-bio">{m.bio}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── MILESTONES ── */}
                <div className="ab-section-divider"><div className="ab-divider-line" /></div>
                <div className="ab-section">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
                        <div>
                            <div className="ab-section-eyebrow">
                                <div className="ab-section-eyebrow-line" />
                                <span className="ab-section-eyebrow-label">The Journey</span>
                            </div>
                            <h2 className="ab-section-headline">
                                Six years of
                                <br />
                                <em>building</em> something
                                <br />
                                <span className="outline">we're proud of</span>
                            </h2>
                            <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, fontWeight: 300 }}>
                                Every milestone below was earned, not bought. From two people
                                in a Berlin studio to a globally distributed team — here's how
                                we got here.
                            </p>
                        </div>
                        <div className="ab-milestones">
                            {milestones.map((m) => (
                                <div className="ab-milestone" key={m.year}>
                                    <div className="ab-milestone-year">{m.year}</div>
                                    <div>
                                        <div className="ab-milestone-title">{m.title}</div>
                                        <div className="ab-milestone-desc">{m.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CULTURE ── */}
                <div className="ab-section-divider"><div className="ab-divider-line" /></div>
                <div className="ab-section">
                    <div className="ab-section-eyebrow">
                        <div className="ab-section-eyebrow-line" />
                        <span className="ab-section-eyebrow-label">How We Live — Culture</span>
                    </div>
                    <h2 className="ab-section-headline" style={{ marginBottom: "3rem" }}>
                        Remote by design,
                        <br />
                        <em>united</em> by standards
                    </h2>
                    <div className="ab-culture">
                        <div className="ab-culture-card">
                            <div className="ab-culture-bg-word">Remote</div>
                            <div className="ab-culture-icon">⬡</div>
                            <div className="ab-culture-title">How we work together</div>
                            <p className="ab-culture-desc">
                                We're fully remote and asynchronous-first — which means we hire
                                the best people regardless of location and trust them to deliver.
                                No mandatory standups. No performative presence.
                            </p>
                            <ul className="ab-culture-list">
                                {["Async-first communication", "Documented decisions, not meetings", "Flexible hours, fixed standards", "Annual team retreat"].map(i => <li key={i}>{i}</li>)}
                            </ul>
                        </div>
                        <div className="ab-culture-card">
                            <div className="ab-culture-bg-word">Craft</div>
                            <div className="ab-culture-icon">◆</div>
                            <div className="ab-culture-title">How we keep getting better</div>
                            <p className="ab-culture-desc">
                                We invest 10% of every quarter into learning — new techniques,
                                emerging tools, internal experiments. Every person on the team
                                has a dedicated growth budget, no questions asked.
                            </p>
                            <ul className="ab-culture-list">
                                {["$3K annual learning budget per person", "Monthly internal design crits", "Open-source contributions encouraged", "Honest feedback, always"].map(i => <li key={i}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}