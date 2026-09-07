export default function WhoIsRunningIt() {
  // Set `photo` to a real image URL to show a picture instead of the initials badge.
  const founders = [
    {
      initials: "MC",
      name: "Riddhi Kahanl",
      role: "CO-FOUNDER · LEAD MENTOR",
      bg: "#DCF1E6",
      photo: "../riddhi.jpg", // e.g. "/images/maya-chen.jpg"
    },
    {
      initials: "DO",
      name: "DIKENDRA BADUWAL",
      role: "CO-FOUNDER · CURRICULUM",
      bg: "#FBE3D8",
      photo: "", // e.g. "/images/daniel-osei.jpg"
    },
  ];

  return (
    <section className="forge-team-section py-24 lg:py-32" id="forge-team-section" >
      <style>{`
        .forge-team-section{
          --bg: #f3f7f7fb;
          --ink: #13161F;
          --ink-soft: #5C6168;
          --ink-faint: #9A9C9F;
          --mint-text: #1E7A5C;
          --border: #E3E1D8;
          --card-bg: #FFFFFF;
          --radius: 14px;
          font-family: 'Inter', sans-serif;
          background-color: var(--bg);
          color: var(--ink);
          padding: 96px 40px;
          -webkit-font-smoothing: antialiased;
        }
        .forge-team-section *{ box-sizing: border-box; }
        .forge-team-section .team-wrap{ max-width: 1180px; margin: 0 auto; }
        .forge-team-section h2{
          font-family:'Space Grotesk', sans-serif; font-weight:700; color: var(--ink);
          line-height:1.08; margin:0; font-size: 32px; margin-bottom: 40px;
        }
        .forge-team-section .section-label{
          font-family:'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.08em;
          color: var(--ink-faint); text-transform: uppercase; margin-bottom: 14px;
        }

        /* Sized for a small founder set instead of stretching across a wide grid */
        .forge-team-section .team-grid{
          display:flex; flex-wrap: wrap; gap: 24px;
        }
        .forge-team-section .team-card{
          background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius);
          padding: 28px; width: 320px; flex: 0 1 320px; display: block;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .forge-team-section .team-card:hover{
          border-color: var(--orange, #D9683E); transform: translateY(-2px);
        }
        .forge-team-section .avatar{
          width: 72px; height: 72px; border-radius: 50%; display:flex; align-items:center; justify-content:center;
          font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 20px; color: var(--ink);
          margin-bottom: 18px; overflow: hidden;
        }
        .forge-team-section .avatar img{
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .forge-team-section .team-card h3{
          font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 17px; margin: 0 0 4px;
        }
        .forge-team-section .team-card span{
          display:block; font-family:'IBM Plex Mono', monospace; font-size: 11.5px;
          color: var(--mint-text); letter-spacing: 0.03em;
        }
        .forge-team-section .team-card,
        .forge-team-section .team-card:visited{ color: inherit; text-decoration: none; }
        @media (max-width: 700px){
          .forge-team-section .team-card{ width: 100%; flex-basis: 100%; }
        }
      `}</style>

      <div className="team-wrap">
        <div className="section-label">Who's running it</div>
        <h2>The people behind the lab.</h2>
        <div className="team-grid">
          {founders.map((founder) => (
            <a className="team-card" href="/founders" key={founder.initials}>
              <div className="avatar" style={{ background: founder.photo ? "transparent" : founder.bg }}>
                {founder.photo ? (
                  <img src={founder.photo} alt={founder.name} />
                ) : (
                  founder.initials
                )}
              </div>
              <h3>{founder.name}</h3>
              <span>{founder.role}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}