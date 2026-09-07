import { useState } from "react";
import { Settings, Github, Linkedin, Mail, ExternalLink, FileText, Award, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FOUNDERS = [
  {
    id: "riddhi",
    initials: "RK",
    name: "Riddhi Khanal",
    role: "Biomedical Engineer | Medical Devices, Healthcare Technology & Research",
    bg: "#DCF1E6",
    photo: "../riddhi.jpeg",
    bio: [
      "Riddhi Khanal is a NEC-registered Biomedical Engineer with experience in medical-device R&D, production, hardware–software integration, sensor calibration, and biomedical equipment servicing. He has worked on anesthesia workstations, ventilators, baby-warming systems, and other healthcare technologies, with over two years of professional experience in Nepal and prior R&D experience in India. His work includes installation, preventive maintenance, calibration, troubleshooting, repair, and technical support for biomedical equipment, with a focus on reliable medical-device solutions, biomedical instrumentation, embedded systems, and practical healthcare innovation.",
      "His technical expertise includes medical-device engineering, biomedical R&D, hardware and software integration, sensor calibration, testing, troubleshooting, product development, and embedded systems using Raspberry Pi, Arduino UNO, and electronics. He also works with Python and MATLAB. During his R&D experience in Vishakhapatnam, India, he contributed to the development of anesthesia workstation and ventilator products, integrating hardware and software components and supporting sensor calibration and continuous technical research during product development.",
      "His research and project work includes a Comparative Study on Autism Spectrum Disorder (ASD) Classification, where he explored the ASD dataset using multiple machine-learning classifiers and compared model performance using accuracy and AUC-ROC scores. He also worked on EEG-Based Sign Language Recognition Using Motor Imagery Brain-Computer Interface (BCI), analyzing EEG signals to identify hand-movement patterns with the aim of developing assistive technology for individuals with paralysis or motor disabilities. In addition, he developed a Deep Learning-Based Medical Chatbot using JSON-defined intents and training samples for kidney disease inquiries, training the model to recognize user intents and provide relevant responses.",
      "Riddhi is a B.Tech graduate in Biomedical Engineering and a Gold Medalist of the 2023 batch. His research has been published in IEEE and Springer proceedings, including work on a Smart Baby Warmer with Integrated Weight Sensing and an IoT-based analysis of the impacts of various masks on human health. He is interested in medical-device development, biomedical instrumentation, healthcare technology, embedded systems, and research-driven innovation.",
    ],
    sections: [
      {
        label: "Selected publications",
        icon: "paper",
        items: [
          { text: "Smart Baby Warmer with Integrated Weight Sensing", url: "https://doi.org/10.1007/978-981-97-7423-4_5" },
          { text: "IoT-Based Analysis of the Impacts of Various Masks on Human Health", url: "https://doi.org/10.1109/ICSSIT55814.2023.10060901" },
        ],
      },
      {
        label: "Recognition",
        icon: "award",
        items: [
          { text: "Gold Medalist, Biomedical Engineering — 2023 batch" },
          { text: "NEC-registered Biomedical Engineer" },
        ],
      },
    ],
    connects: [
      { type: "linkedin", url: "https://www.linkedin.com/in/riddhi-khanal-33a693208/" },
      { type: "email", url: "mailto:riddhikhanal@example.com" },
    ],
  },
  {
    id: "dikendra",
    initials: "DB",
    name: "Dikendra Baduwal",
    role: "Biomedical AI Researcher | Deep Learning for Medical Imaging",
    bg: "#FBE3D8",
    photo: "../dikendra.jpeg",
    bio: [
      "Dikendra Baduwal builds AI that sees inside the human body — turning noisy, quick-acquired MRI and CT scans into clinical-grade diagnostic intelligence. His work fuses generative models, attention-based segmentation, and LLM-driven reasoning to decode body composition, brain aging, and tumor pathology from raw scans, research forged in collaboration with A*STAR Singapore.",
      "His lung tumor segmentation pipeline achieved 93% accuracy across a validation set of more than 10,000 patient CT scans, and his body-composition AI now underpins Q1-published research in the European Journal of Radiology AI. Across every project, his focus is the same: models that are not just accurate on paper, but trustworthy enough for a radiologist to act on.",
    ],
    sections: [
      {
        label: "Core expertise",
        icon: "none",
        items: [
          { text: "GAN-enhanced MRI reconstruction & image quality restoration" },
          { text: "Deep learning segmentation — U-Net, SegUNet, Attention Residual U-Net" },
          { text: "Multi-agent LLM systems for automated healthcare data engineering" },
          { text: "Neuroimaging & brain-age modeling (AssemblyNet, whole-brain volumetry)" },
          { text: "Body composition phenotyping from MRI for sarcopenia & obesity research" },
        ],
      },
      {
        label: "Selected publications",
        icon: "paper",
        items: [
          { text: "GAN-MRI Enhanced Multi-Organ MRI Segmentation: A Deep Learning Perspective — Radiological Physics and Technology" },
          { text: "AI-Driven MR Thigh Scan Analysis for Body Composition Phenotypic Classification of Healthy Older Persons — European Journal of Radiology AI (Q1, IF 3.4)" },
          { text: "Chain-of-Thought Driven Multi-Agent System for Healthcare Data Engineering: A Case Study on Body Fat Prediction — SN Computer Science" },
        ],
      },
      {
        label: "Conference presentations",
        icon: "mic",
        items: [
          { text: "European Congress of Radiology (ECR), Vienna, 2024 — Oral: \"Enhancing Quick-Acquired MRI Scans with the DL-Based Aikenist Framework\"; Poster: \"NeuroAI: SG Population-Specific Normative Brain Aging Volumetry Database\"" },
          { text: "ICIPCVPR 2025 — \"Automatic Segmentation of Lung Tumor in CT Images Using SegUNet Architecture\"" },
        ],
      },
      {
        label: "Recognition",
        icon: "award",
        items: [
          { text: "Singapore International Pre-Graduate Award (SIPGA), A*STAR Singapore" },
          { text: "Gold Medalist, Biomedical Engineering — CGPA 9.41 / 10" },
          { text: "SAARC Scholarship, Undergraduate Program" },
        ],
      },
    ],
    connects: [
      { type: "github", url: "https://github.com/Dikendra-123" },
      { type: "portfolio", url: "https://dikendra-123.github.io/Dikendrabaduwal/" },
      { type: "linkedin", url: "https://www.linkedin.com/in/dikendra/" },
      { type: "email", url: "mailto:dikendrabaduwal98@gmail.com" },
    ],
  },
];

const CONNECT_META = {
  github: { icon: Github, label: "GitHub" },
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  email: { icon: Mail, label: "Email" },
  portfolio: { icon: ExternalLink, label: "Portfolio" },
};

const SECTION_ICONS = {
  paper: FileText,
  award: Award,
  mic: Mic,
};

export default function FoundersPage() {
  const [activeId, setActiveId] = useState(FOUNDERS[0].id);
  const founder = FOUNDERS.find((f) => f.id === activeId);
  const navigation = useNavigate()

  return (
    <div className="forge-founders " >
      <style>{`
        .forge-founders{
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
          min-height: 100vh;
        }
        .forge-founders *{ box-sizing: border-box; }
        .forge-founders a{ text-decoration:none; color:inherit; }
        .forge-founders .wrap{ max-width: 1000px; margin: 0 auto; padding: 0 40px; }

        .forge-founders header{
          position: sticky; top:0; z-index: 20;
          background: rgba(247,246,241,0.88); backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }
        .forge-founders .nav{ display:flex; align-items:center; justify-content:space-between; padding: 18px 40px; max-width: 1000px; margin: 0 auto; }
        .forge-founders .logo{ display:flex; align-items:center; gap:10px; font-family:'Space Grotesk', sans-serif; font-weight:700; font-size:18px; letter-spacing: 0.02em; }
        .forge-founders .logo-mark{ width:32px; height:32px; border-radius:8px; background: var(--ink); color: #fff; display:flex; align-items:center; justify-content:center; }
        .forge-founders .btn-dark{ background: var(--ink); color:#fff; padding: 11px 22px; border-radius: 999px; font-size: 14.5px; font-weight: 600; white-space: nowrap; }

        .forge-founders section{ padding: 70px 0 90px; }
        .forge-founders .eyebrow{
          display:inline-flex; align-items:center; gap:8px; background: var(--mint-bg);
          border: 1px solid var(--mint-line); color: var(--mint-text); font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px; letter-spacing: 0.07em; padding: 7px 16px; border-radius: 999px; margin-bottom: 26px;
        }
        .forge-founders .eyebrow .dot{ width:6px; height:6px; border-radius:50%; background: var(--mint-text); }
        .forge-founders h1, .forge-founders h2, .forge-founders h3{ font-family:'Space Grotesk', sans-serif; font-weight:700; color: var(--ink); line-height:1.08; margin:0; }
        .forge-founders p.lead{ color: var(--ink-soft); font-size: 16px; line-height: 1.7; margin:0; }

        .forge-founders .hero{ padding-top: 70px; padding-bottom: 10px; }
        .forge-founders .hero h1{ font-size: 40px; max-width: 640px; margin-bottom: 20px; }
        .forge-founders .hero .lead{ max-width: 560px; }

        /* Tab switcher */
        .forge-founders .tabs{ display:flex; gap: 10px; margin-top: 40px; margin-bottom: 44px; }
        .forge-founders .tab-btn{
          display:flex; align-items:center; gap: 10px; padding: 10px 18px 10px 10px;
          border-radius: 999px; border: 1px solid var(--border); background: var(--card-bg);
          font-size: 14px; font-weight: 600; color: var(--ink-soft); cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .forge-founders .tab-btn .tab-avatar{
          width: 28px; height: 28px; border-radius: 50%; display:flex; align-items:center; justify-content:center;
          font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 11px; color: var(--ink); overflow:hidden; flex-shrink:0;
        }
        .forge-founders .tab-btn .tab-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
        .forge-founders .tab-btn.active{ border-color: var(--orange); color: var(--ink); background: #fff; }
        .forge-founders .tab-btn:not(.active):hover{ border-color: var(--ink-faint); color: var(--ink); }

        /* Profile */
        .forge-founders .profile-head{ display:flex; gap: 28px; align-items:flex-start; margin-bottom: 34px; flex-wrap: wrap; }
        .forge-founders .profile-photo{
          width: 116px; height: 116px; border-radius: var(--radius); overflow: hidden; flex-shrink: 0;
          display:flex; align-items:center; justify-content:center;
          font-family:'Space Grotesk', sans-serif; font-weight:700; font-size: 30px; color: var(--ink);
        }
        .forge-founders .profile-photo img{ width:100%; height:100%; object-fit: cover; display:block; }
        .forge-founders .profile-name{ font-size: 26px; margin-bottom: 8px; }
        .forge-founders .profile-role{ color: var(--ink-soft); font-size: 15px; line-height: 1.5; max-width: 460px; margin-bottom: 18px; }
        .forge-founders .connect-row{ display:flex; gap: 10px; flex-wrap: wrap; }
        .forge-founders .connect-link{
          display:flex; align-items:center; gap: 7px; background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 999px; padding: 8px 14px 8px 12px; font-size: 13px; font-weight: 600; color: var(--ink);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .forge-founders .connect-link:hover{ border-color: var(--orange); transform: translateY(-1px); }
        .forge-founders .connect-link svg{ color: var(--mint-text); }

        .forge-founders .bio p{ color: var(--ink-soft); font-size: 15.5px; line-height: 1.75; margin: 0 0 16px; }

        .forge-founders .info-section{ margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--border); }
        .forge-founders .info-section h3{
          font-size: 12.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-faint);
          font-family: 'IBM Plex Mono', monospace; font-weight: 600; margin-bottom: 18px;
        }
        .forge-founders .info-list{ display:flex; flex-direction: column; gap: 10px; }
        .forge-founders .info-item{
          display:flex; align-items:flex-start; gap: 12px; font-size: 14.5px; color: var(--ink); line-height: 1.55;
        }
        .forge-founders .info-item .bullet{
          width: 6px; height: 6px; border-radius: 50%; background: var(--orange); margin-top: 8px; flex-shrink:0;
        }
        .forge-founders .info-item svg{ color: var(--mint-text); flex-shrink:0; margin-top: 2px; }
        .forge-founders .info-item a{ color: var(--ink); border-bottom: 1px solid var(--mint-line); }
        .forge-founders .info-item a:hover{ border-color: var(--orange); color: var(--orange); }

        @media (max-width: 640px){
          .forge-founders .hero h1{ font-size: 30px; }
          .forge-founders .profile-head{ flex-direction: column; }
        }

        .forge-founders footer{ border-top: 1px solid var(--border); padding: 40px 0; }
        .forge-founders .foot-bottom{
          display:flex; justify-content:space-between; align-items:center; font-size: 13px;
          color: var(--ink-faint); flex-wrap: wrap; gap: 10px;
        }
      `}</style>

      <header>
        <div className="nav">
          <div className="logo" onClick={()=>navigation("/")} style={{
            cursor:"pointer"
          }}>
            <div className="logo-mark"><Settings size={16} /></div>
            Build Minds
          </div>
          {/* <a href="/" className="btn-dark">Apply Now</a> */}
        </div>
      </header>

      <main className="wrap">
        <section>
          <div className="eyebrow"><span className="dot"></span>OUR FOUNDERS</div>
          <h1>The people behind the lab.</h1>
          <p className="lead">
            Two engineers, two very different corners of biomedical technology, one shared belief:
            healthcare innovation should be built, tested, and proven — not just theorized.
          </p>

          <div className="tabs">
            {FOUNDERS.map((f) => (
              <button
                key={f.id}
                className={`tab-btn ${f.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(f.id)}
              >
                <span className="tab-avatar" style={{ background: f.photo ? "transparent" : f.bg }}>
                  {f.photo ? <img  loading="lazy"  src={f.photo} alt={f.name} /> : f.initials}
                </span>
                {f.name}
              </button>
            ))}
          </div>

          <div className="profile-head">
            <div className="profile-photo" style={{ background: founder.photo ? "transparent" : founder.bg }}>
              {founder.photo ? <img loading="lazy" src={founder.photo} alt={founder.name} /> : founder.initials}
            </div>
            <div>
              <h2 className="profile-name">{founder.name}</h2>
              <p className="profile-role">{founder.role}</p>
              <div className="connect-row">
                {founder.connects.map((c) => {
                  const meta = CONNECT_META[c.type];
                  const Icon = meta.icon;
                  return (
                    <a
                      className="connect-link"
                      href={c.url}
                      target={c.type === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                      key={c.type}
                    >
                      <Icon size={15} />
                      {meta.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bio">
            {founder.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {founder.sections.map((sec) => {
            const Icon = SECTION_ICONS[sec.icon];
            return (
              <div className="info-section" key={sec.label}>
                <h3>{sec.label}</h3>
                <div className="info-list">
                  {sec.items.map((item, i) => (
                    <div className="info-item" key={i}>
                      {Icon ? <Icon size={15} /> : <span className="bullet"></span>}
                      <span>
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noreferrer">{item.text}</a>
                        ) : (
                          item.text
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      
    </div>
  );
}