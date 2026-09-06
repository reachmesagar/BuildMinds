import { useEffect } from "react";
import { Settings, MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".forge-about .reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="forge-about">
      <style>{`
        .forge-about{
          --bg: #F7F6F1;
          --grid-line: rgba(17, 20, 28, 0.05);
          --ink: #13161F;
          --ink-soft: #5C6168;
          --ink-faint: #9A9C9F;
          --mint-bg: #DCF1E6;
          --mint-text: #1E7A5C;
          --mint-line: #B9E4D2;
          --orange: #D9683E;
          --border: #E3E1D8;
          --card-bg: #FFFFFF;
          --radius: 14px;
          font-family: 'Inter', sans-serif;
          background-color: var(--bg);
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 42px 42px;
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
          scroll-behavior: smooth;
        }
        .forge-about *{ box-sizing: border-box; }
        .forge-about a{ text-decoration:none; color:inherit; }
        .forge-about .wrap{ max-width: 1180px; margin: 0 auto; padding: 0 40px; }

        .forge-about .rail{
          position: fixed; left: 24px; top: 50%; transform: translateY(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 22px; z-index: 5;
        }
        .forge-about .rail .dot{ width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid var(--ink-faint); background: transparent; }
        .forge-about .rail .dot.active{ width: 11px; height: 11px; background: var(--orange); border-color: var(--orange); }
        .forge-about .rail::before{ content:""; position:absolute; top:-40px; bottom:-40px; width:1px; background: var(--border); z-index:-1; }
        @media (max-width: 900px){ .forge-about .rail{ display:none; } }

        .forge-about header{
          position: sticky; top:0; z-index: 20;
          background: rgba(247,246,241,0.88); backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }
        .forge-about .nav{ display:flex; align-items:center; justify-content:space-between; padding: 18px 40px; max-width: 1180px; margin: 0 auto; }
        .forge-about .logo{ display:flex; align-items:center; gap:10px; font-family:'Space Grotesk', sans-serif; font-weight:700; font-size:18px; letter-spacing: 0.02em; }
        .forge-about .logo-mark{ width:32px; height:32px; border-radius:8px; background: var(--ink); color: #fff; display:flex; align-items:center; justify-content:center; }
        .forge-about .nav-links{ display:flex; align-items:center; gap:34px; font-size:14.5px; font-weight:500; }
        .forge-about .nav-links a{ color: var(--ink-soft); position:relative; padding-bottom:4px; }
        .forge-about .nav-links a:hover{ color: var(--ink); }
        .forge-about .nav-links a.active{ color: var(--ink); }
        .forge-about .nav-links a.active::after{ content:""; position:absolute; left:0; right:0; bottom:-6px; height:2px; background: var(--orange); border-radius:2px; }
        .forge-about .btn-dark{ background: var(--ink); color:#fff; padding: 11px 22px; border-radius: 999px; font-size: 14.5px; font-weight: 600; white-space: nowrap; }
        @media (max-width: 880px){ .forge-about .nav-links{ display:none; } }

        .forge-about section{ padding: 96px 0; }
        .forge-about .eyebrow{
          display:inline-flex; align-items:center; gap:8px; background: var(--mint-bg);
          border: 1px solid var(--mint-line); color: var(--mint-text); font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px; letter-spacing: 0.07em; padding: 7px 16px; border-radius: 999px; margin-bottom: 26px;
        }
        .forge-about .eyebrow .dot{ width:6px; height:6px; border-radius:50%; background: var(--mint-text); }
        .forge-about h1, .forge-about h2, .forge-about h3{ font-family:'Space Grotesk', sans-serif; font-weight:700; color: var(--ink); line-height:1.08; margin:0; }
        .forge-about .section-label{ font-family:'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.08em; color: var(--ink-faint); text-transform: uppercase; margin-bottom: 14px; }
        .forge-about p.lead{ color: var(--ink-soft); font-size: 17px; line-height: 1.7; margin:0; }

        .forge-about .hero{ padding-top: 88px; padding-bottom: 70px; }
        .forge-about .hero h1{ font-size: 54px; max-width: 720px; margin-bottom: 26px; }
        .forge-about .hero .lead{ max-width: 580px; margin-bottom: 44px; }
        .forge-about .stat-row{ display:flex; gap: 56px; padding-top: 40px; border-top: 1px solid var(--border); margin-top: 56px; flex-wrap: wrap; }
        .forge-about .stat-row .stat strong{ font-family:'Space Grotesk', sans-serif; font-size: 30px; display:block; margin-bottom: 4px; }
        .forge-about .stat-row .stat span{ font-family:'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.06em; color: var(--ink-faint); text-transform: uppercase; }
        @media (max-width: 700px){ .forge-about .hero h1{ font-size: 38px; } }

        .forge-about .story{ display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 70px; align-items: start; }
        .forge-about .story .pull{
          background: var(--card-bg); border: 1px solid var(--border); border-left: 3px solid var(--orange);
          border-radius: var(--radius); padding: 26px 28px; font-family:'Space Grotesk', sans-serif; font-weight:600;
          font-size: 19px; line-height: 1.45; color: var(--ink); margin-top: 28px;
        }
        .forge-about .story p + p{ margin-top: 16px; }
        @media (max-width: 860px){ .forge-about .story{ grid-template-columns: 1fr; gap: 30px; } }

        .forge-about .gallery-head{ display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 36px; gap: 24px; flex-wrap: wrap; }
        .forge-about .gallery-head h2{ font-size: 34px; }
        .forge-about .gallery-head p{ color: var(--ink-soft); max-width: 380px; font-size: 15px; line-height:1.6; margin:0; }
        .forge-about .gallery{ display:grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 190px; gap: 16px; }
        .forge-about .g-item{ position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); background: var(--ink); }
        .forge-about .g-item img{ width:100%; height:100%; object-fit: cover; display:block; filter: saturate(0.92) contrast(1.02); transition: transform 0.5s ease; }
        .forge-about .g-item:hover img{ transform: scale(1.05); }
        .forge-about .g-item .cap{
          position:absolute; left:0; right:0; bottom:0; padding: 12px 14px;
          background: linear-gradient(180deg, rgba(19,22,31,0) 0%, rgba(19,22,31,0.75) 100%);
          color:#fff; font-family:'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.04em;
        }
        .forge-about .g-item.large{ grid-column: span 2; grid-row: span 2; }
        .forge-about .g-item.wide{ grid-column: span 2; }
        @media (max-width: 760px){
          .forge-about .gallery{ grid-template-columns: repeat(2,1fr); grid-auto-rows: 160px; }
          .forge-about .g-item.large{ grid-column: span 2; grid-row: span 1; }
        }

        .forge-about .values-grid{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .forge-about .value-card{ background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px 22px; }
        .forge-about .value-card .swatch{ width: 30px; height: 30px; border-radius: 8px; margin-bottom: 18px; }
        .forge-about .value-card h3{ font-size: 16.5px; margin-bottom: 8px; }
        .forge-about .value-card p{ font-size: 14px; color: var(--ink-soft); line-height: 1.55; margin:0; }
        @media (max-width: 900px){ .forge-about .values-grid{ grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px){ .forge-about .values-grid{ grid-template-columns: 1fr; } }

        .forge-about .team-grid{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .forge-about .team-card{ background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; }
        .forge-about .avatar{ width: 52px; height: 52px; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 16px; color: var(--ink); margin-bottom: 16px; }
        .forge-about .team-card h3{ font-size: 15.5px; margin-bottom: 3px; }
        .forge-about .team-card span{ display:block; font-family:'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--mint-text); letter-spacing: 0.03em; }
        @media (max-width: 900px){ .forge-about .team-grid{ grid-template-columns: repeat(2,1fr); } }

        .forge-about .map-block{ display:grid; grid-template-columns: 0.85fr 1.15fr; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: var(--card-bg); }
        .forge-about .map-info{ padding: 40px; }
        .forge-about .map-info h3{ font-size: 24px; margin-bottom: 14px; }
        .forge-about .map-info p.lead{ font-size: 15px; margin-bottom: 28px; }
        .forge-about .map-info .row{ display:flex; gap: 14px; padding: 14px 0; border-top: 1px solid var(--border); align-items:flex-start; }
        .forge-about .map-info .row:first-of-type{ border-top:none; }
        .forge-about .map-info .row .icon{ color: var(--mint-text); flex-shrink:0; margin-top:2px; }
        .forge-about .map-info .row .v{ font-size: 14.5px; color: var(--ink); line-height:1.5; }
        .forge-about .map-embed{ min-height: 420px; background: var(--border); }
        .forge-about .map-embed iframe{ width:100%; height:100%; border:0; display:block; min-height:420px; }
        @media (max-width: 860px){ .forge-about .map-block{ grid-template-columns: 1fr; } .forge-about .map-embed{ min-height: 320px; } .forge-about .map-embed iframe{ min-height:320px; } }

        .forge-about .cta{ background: var(--ink); border-radius: 20px; padding: 58px 56px; display:flex; align-items:center; justify-content:space-between; gap: 30px; flex-wrap: wrap; }
        .forge-about .cta h2{ color:#fff; font-size: 28px; max-width: 460px; }
        .forge-about .cta p{ color: #B7BAC2; font-size: 14.5px; margin-top:8px; max-width:420px; }
        .forge-about .cta .btn-light{ background:#fff; color: var(--ink); padding: 13px 26px; border-radius: 999px; font-weight:600; font-size: 14.5px; white-space:nowrap; display:inline-flex; align-items:center; gap:8px; }

        .forge-about footer{ border-top: 1px solid var(--border); padding: 56px 0 40px; }
        .forge-about .foot-grid{ display:grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .forge-about .foot-grid h4{ font-family:'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.07em; color: var(--ink-faint); text-transform: uppercase; margin-bottom: 16px; }
        .forge-about .foot-grid a{ display:block; color: var(--ink-soft); font-size: 14.5px; margin-bottom: 11px; }
        .forge-about .foot-grid a:hover{ color: var(--ink); }
        .forge-about .foot-bottom{ display:flex; justify-content:space-between; align-items:center; padding-top: 28px; border-top: 1px solid var(--border); font-size: 13px; color: var(--ink-faint); flex-wrap: wrap; gap: 10px; }
        @media (max-width: 760px){ .forge-about .foot-grid{ grid-template-columns: 1fr; } }

        .forge-about .reveal{ opacity:0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .forge-about .reveal.in{ opacity:1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce){ .forge-about .reveal{ opacity:1; transform:none; transition:none; } }
      `}</style>

      <div className="rail" aria-hidden="true">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <header>
        <div className="nav">
          <div className="logo">
            <div className="logo-mark"><Settings size={16} /></div>
            Build Minds
          </div>
          <nav className="nav-links">
            <a href="#">Why Forge</a>
            <a href="#" className="active">About</a>
            <a href="#">Curriculum</a>
            <a href="#">Courses</a>
            <a href="#">Exams</a>
            <a href="#">Admissions</a>
          </nav>
          <a href="/" className="btn-dark">Apply Now</a>
        </div>
      </header>

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <div className="eyebrow"><span className="dot"></span>ABOUT FORGE · EST. 2018</div>
          <h1>We started with one robot arm<br />and a syllabus nobody asked for.</h1>
          <p className="lead">
            FORGE began as a six-person weekend workshop for engineering students who were tired of learning
            control theory from slides. Eight years on, we're a four-semester undergraduate specialization with
            our own lab, our own hardware fleet, and a transcript that means something to the people hiring our
            graduates.
          </p>

          <div className="stat-row">
            <div className="stat"><strong>2018</strong><span>Year founded</span></div>
            <div className="stat"><strong>340+</strong><span>Alumni placed</span></div>
            <div className="stat"><strong>14</strong><span>Lab mentors</span></div>
            <div className="stat"><strong>6</strong><span>Countries represented</span></div>
          </div>
        </section>

        {/* STORY */}
        <section className="story reveal">
          <div>
            <div className="section-label">How we got here</div>
            <h2 style={{ fontSize: "32px" }}>Theory was never the problem. The lecture hall was.</h2>
            <div className="pull">
              "Every cohort ends the semester having shipped something that moves, sees, or decides on its own.
              That's the only metric we've ever trusted."
            </div>
          </div>
          <div>
            <p className="lead">
              Our founders — three robotics grad students and a former hardware lead — ran their first workshop
              out of a borrowed mechanical engineering bay with a single second-hand robot arm and a whiteboard
              full of ungraded ambition. Twelve students showed up. Eleven came back the following week.
            </p>
            <br />
            <p className="lead">
              By 2020 the workshop had outgrown its bay, its budget, and its informal syllabus. We became an
              accredited undergraduate specialization, hired our first full-time mentors, and built the lab
              you'll see below. The rule that started it all hasn't changed: if you can't demo it, you haven't
              learned it.
            </p>
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="reveal">
          <div className="gallery-head">
            <h2>Inside the lab</h2>
            <p>A working look at where the prototypes actually get built, broken, and rebuilt — six days a week.</p>
          </div>
          <div className="gallery">
            <div className="g-item large">
              <img src="https://picsum.photos/seed/forge-bay/700/700" alt="Main robotics lab bay" />
              <div className="cap">LAB BAY 02 — ASSEMBLY FLOOR</div>
            </div>
            <div className="g-item">
              <img src="https://picsum.photos/seed/forge-arm/400/400" alt="Robotic arm prototype" />
              <div className="cap">CAPSTONE BUILD</div>
            </div>
            <div className="g-item">
              <img src="https://picsum.photos/seed/forge-circuit/400/400" alt="Circuit board soldering station" />
              <div className="cap">ELECTRONICS BENCH</div>
            </div>
            <div className="g-item wide">
              <img src="https://picsum.photos/seed/forge-team/800/400" alt="Students working together in lab" />
              <div className="cap">SOPHOMORE COHORT — SPRING REVIEW</div>
            </div>
            <div className="g-item">
              <img src="https://picsum.photos/seed/forge-sensor/400/400" alt="Sensor calibration rig" />
              <div className="cap">SENSOR CALIBRATION RIG</div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="reveal">
          <div className="section-label">What we hold onto</div>
          <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Four things we won't compromise on.</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="swatch" style={{ background: "var(--mint-bg)", border: "1px solid var(--mint-line)" }}></div>
              <h3>Hardware first</h3>
              <p>Every course ships a working build, not a slide deck. If it doesn't move or compute, it's not done.</p>
            </div>
            <div className="value-card">
              <div className="swatch" style={{ background: "#FBE3D8", border: "1px solid #F0C3AC" }}></div>
              <h3>Mentors in the lab</h3>
              <p>Our staff hold office hours at the workbench, not behind a podium. Questions get answered next to the hardware.</p>
            </div>
            <div className="value-card">
              <div className="swatch" style={{ background: "#E1E9EF", border: "1px solid #C9D6E0" }}></div>
              <h3>Failure is data</h3>
              <p>Most prototypes break at least twice before they walk, fly, or grip correctly. We grade the iteration, not the first attempt.</p>
            </div>
            <div className="value-card">
              <div className="swatch" style={{ background: "#EFE7D8", border: "1px solid #E0D2B5" }}></div>
              <h3>Transcripts that translate</h3>
              <p>Every grade maps to a skill we can demo to an employer in under five minutes. No abstractions without a build behind them.</p>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="reveal">
          <div className="section-label">Who's running it</div>
          <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>The people behind the lab.</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar" style={{ background: "var(--mint-bg)" }}>MC</div>
              <h3>Maya Chen</h3>
              <span>CO-FOUNDER · LEAD MENTOR</span>
            </div>
            <div className="team-card">
              <div className="avatar" style={{ background: "#FBE3D8" }}>DO</div>
              <h3>Daniel Osei</h3>
              <span>CO-FOUNDER · CURRICULUM</span>
            </div>
            <div className="team-card">
              <div className="avatar" style={{ background: "#E1E9EF" }}>PR</div>
              <h3>Priya Raman</h3>
              <span>MENTOR · CONTROLS &amp; AI</span>
            </div>
            <div className="team-card">
              <div className="avatar" style={{ background: "#EFE7D8" }}>TV</div>
              <h3>Tomas Vega</h3>
              <span>MENTOR · EMBEDDED SYSTEMS</span>
            </div>
          </div>
        </section>

        {/* MAP / LOCATION */}
        <section className="reveal">
          <div className="section-label">Find us</div>
          <h2 style={{ fontSize: "32px", marginBottom: "36px" }}>Visit the lab.</h2>
          <div className="map-block">
            <div className="map-info">
              <h3>FORGE Robotics Lab</h3>
              <p className="lead">
                Tours run every Friday at 3 PM — no need to email ahead, just sign in at the front desk and
                mention you're here for FORGE.
              </p>
              <div className="row">
                <MapPin size={16} className="icon" />
                <div className="v">475 Innovation Way, Suite 200<br />Austin, TX 78701</div>
              </div>
              <div className="row">
                <Clock size={16} className="icon" />
                <div className="v">Mon – Fri · 9:00 AM – 6:00 PM</div>
              </div>
              <div className="row">
                <Phone size={16} className="icon" />
                <div className="v">+1 (512) 555-0148</div>
              </div>
              <div className="row">
                <Mail size={16} className="icon" />
                <div className="v">hello@forgerobotics.io</div>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                src="https://maps.google.com/maps?q=475%20Innovation%20Way%2C%20Austin%2C%20TX%2078701&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FORGE Robotics Lab location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: 0 }}>
          <div className="cta reveal">
            <div>
              <h2>Want to see it before you apply?</h2>
              <p>Book a Friday lab tour or sit in on a live build review — no commitment, just hardware.</p>
            </div>
            <a href="#" className="btn-light">
              Book a Tour <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="logo" style={{ marginBottom: "14px" }}>
                <div className="logo-mark"><Settings size={16} /></div>
                FORGE
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "14px", maxWidth: "280px", lineHeight: 1.6 }}>
                A four-semester undergraduate Robotics &amp; AI specialization. Real hardware, real code, real exams.
              </p>
            </div>
            <div>
              <h4>Program</h4>
              <a href="#">Why Forge</a>
              <a href="#">Curriculum</a>
              <a href="#">Courses</a>
              <a href="#">Exams</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Admissions</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 FORGE Robotics &amp; AI Program. All rights reserved.</span>
            <span>Made in Austin, TX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}