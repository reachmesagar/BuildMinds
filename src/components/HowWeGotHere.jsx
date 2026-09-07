export default function HowWeGotHere() {
  return (
    <section className="forge-story-section">
      <style>{`
        .forge-story-section{
          --bg: #f7f6f1d2;
          --ink: #13161F;
          --ink-soft: #5C6168;
          --ink-faint: #9A9C9F;
          --orange: #D9683E;
          --border: #E3E1D8;
          --card-bg: #FFFFFF;
          --radius: 14px;
          font-family: 'Inter', sans-serif;
          background-color: var(--bg);
          color: var(--ink);
          padding: 96px 40px;
          -webkit-font-smoothing: antialiased;
        }
        .forge-story-section *{ box-sizing: border-box; }
        .forge-story-section .story-wrap{ max-width: 1180px; margin: 0 auto; }
        .forge-story-section h2, .forge-story-section h3{
          font-family:'Space Grotesk', sans-serif; font-weight:700; color: var(--ink); line-height:1.08; margin:0;
        }
        .forge-story-section .section-label{
          font-family:'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.08em;
          color: var(--ink-faint); text-transform: uppercase; margin-bottom: 14px;
        }
        .forge-story-section p.lead{ color: var(--ink-soft); font-size: 17px; line-height: 1.7; margin:0; }
        .forge-story-section .story{ display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 70px; align-items: start; }
        .forge-story-section .story h2{ font-size: 32px; }
        .forge-story-section .story .pull{
          background: var(--card-bg); border: 1px solid var(--border); border-left: 3px solid var(--orange);
          border-radius: var(--radius); padding: 26px 28px; font-family:'Space Grotesk', sans-serif; font-weight:600;
          font-size: 19px; line-height: 1.45; color: var(--ink); margin-top: 28px;
        }
        .forge-story-section .story p + p{ margin-top: 16px; }
        @media (max-width: 860px){ .forge-story-section .story{ grid-template-columns: 1fr; gap: 30px; } }
      `}</style>

      <div className="story-wrap">
        <div className="story">
          <div>
            <div className="section-label text-black">How we got here</div>
            <h2>Theory was never the problem. The lecture hall was.</h2>
            <div className="pull">
              "Every cohort ends the semester having shipped something that moves, sees, or decides on its own.
              That's the only metric we've ever trusted."
            </div>
          </div>
          <div>
            <p className="lead">
              Our founders were undergrads who kept hitting the same wall: every AI and robotics course buried
              them in jargon — backprop, latent space, SLAM, policy gradients — without ever showing what any of
              it actually did. They ran their first workshop out of a borrowed mechanical engineering bay with a
              single second-hand robot arm, translating the confusing terms into things you could point at and
              press play on. Twelve students showed up. Eleven came back the following week.
            </p>
            <br />
            <p className="lead">
              By 2020 the workshop had outgrown its bay, its budget, and its informal syllabus. We became an
              accredited undergraduate specialization built for exactly that student — someone smart, motivated,
              and lost in the vocabulary — hired our first full-time mentors, and built the lab you'll see below.
              The rule that started it all hasn't changed: if you can't demo it, you haven't learned it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}