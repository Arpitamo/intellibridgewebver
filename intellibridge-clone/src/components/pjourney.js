import React from "react";
import "../styles/pjourney.css";

export default function PJourney({ onOpenSME }){
  const journ=[
    {
      title:"Requirement Discovery",
      desc:"We begin by understanding your organization's goals, challenges, and learning needs.",
      icon: "🔍",
    },
    {
      title:"Department Alignment",
      desc: "We collaborate across departments to ensure training aligns with business priorities.",
      icon:"🤝",
    },
    {
      title: "Learner Insight",
      desc:"We analyze learner profiles to tailor content for engagement and relevance.",
      icon:"🧠",
    },
    {
      title:"Tailored Program Design",
      desc: "We craft customized learning journeys based on roles, goals, and delivery preferences.",
      icon:"🎨",
    },
  ];

  const pbenefit= [
  "Extension of Your L&D Team",
  "Outcome-Focused Approach",
    "Engaging, Practical Learning Experiences",
    "Customized, Role-Based Learning Journeys",
    "Industry-Sourced Insights & Best Practices",
    "Scalable, Hybrid Delivery",
    "End-to-End Partnership Support",
  ];

  const more=[
    "📈Proven Results: 87% of our clients report measurable improvement in employee performance within 3 months",
    "🛡️Quality Guarantee: 100% satisfaction guarantee with free course retakes if learning objectives are not met",
    "⭐Latest Content: Curriculum updated quarterly to reflect the latest industry trends and best practices",
    "⚡Fast Implementation: Launch custom training programs in as little as 2 weeks with our rapid deployment process",
    "💬Dedicated Support: Personal account manager and 24/7 technical support for all enterprise clients",
    "🏆Industry Recognition: Award-winning training provider recognized by leading industry associations",
  ];

  return(
    <section className="pjourney">
      <h5>Why Choose Us</h5>
      <h4>
       We combine cutting-edge content with exceptional delivery to
       create transformative learning
        experiences that drive real business results.</h4>
      <h2>Our Partnership Journey</h2>
      <p>We co-create impactful learning programs through a structured, empathetic approach.</p>

      <div className="jstruct">
        {journ.map((step, index)=>(
          <div key={index} className="journey-card">
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="benefits">
        <h3>Key Partnership Benefits</h3>
        <ul>
          {pbenefit.map((item, index)=>(
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>

      <div className="mreasons">
        <h3>More Reasons to Partner With Us</h3>
        <div className="rstr">
          {more.map((reason, index)=>(
            <div key={index} className="rbox">{reason}</div>
          ))}
        </div>
      </div>
            <div className="footer">
              <h1>Trusted by Organizations Worldwide</h1>
        <div className="footerstr">
          
          <div className="sbox"><strong>500+</strong><br /><h5>Companies Trained</h5>
          <h5>From startups to Fortune 500</h5>
          </div>
          <div className="sbox"><strong>50,000+</strong><br />
          <h5>Professionals Certified</h5>
          <h5>Across 25+ countries</h5></div>
          <div className="sbox"><strong>4.9/5</strong><br />
          <h5>Average Rating</h5>
          <h5>Based on 2,000+ reviews</h5>
          </div>
          <div className="sbox"><strong>92%</strong><br />
          <h5>Client Retention</h5>
          <h5>Year-over-year</h5></div>
        </div>

        <div className="join">
          <h3>JOIN US</h3>
          <p>Are You an Expert Subject Matter Expert (SME)?</p>
          <p>Share your expertise with leading organizations worldwide. Join our network of 200+ expert SMEs and help shape the future of corporate learning.</p>
              <button type="button" className="applybtn" onClick={(e) =>{
                  e.preventDefault();
                  if (typeof onOpenSME === "function") onOpenSME();
                }}
              >Register as an SME</button>{/*onOpenSME(); is declared in home.js*/}
        </div>

        <div className="trusted">
          <p>TRUSTED BY INDUSTRY LEADERS.</p>
        </div>
      </div>
    </section>
  );
}