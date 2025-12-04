import React from "react";
import "../styles/WhyUs.css";

export default function WhyUs() {
  const benefits =[
    {title:"Learn from true industry experts",
      desc:"SMEs with 10+ years of real, hands-on experience guide your learning.",
      icon:"🎓",
    },
    {title:"Enterprise Solutions",
      desc:"Scalable training programs designed for organizations of all sizes, from startups to Fortune 500 companies.",
      icon:"🏢",
    },
    {title:"Quality Assurance",
      desc:"All programs undergo rigorous quality checks and are continuously updated with latest industry practices.",
      icon:"✅",
    },
    {title:"Flexible Scheduling",
      desc:"Training schedules that work around your business operations without disrupting productivity.",
      icon:"🕒",
    },
  ];

  const strategicPoints =["Digital skills transformation","Business process optimization",
    "Leadership communication","Automation & AI adoption","Data-led decision making",
    "Change management",];

  const journeyFeatures =["Aligned to Organizational Frameworks",
    "Role & Proficiency-Based",
    "Measurable Skill Progression",
    "Hybrid & Flexible Delivery",
    "Scalable Across the Organization",
  ];

  return(
    <section id="whyus" className="whysec">
      <div className="whyus">
        <h2>Why our services stands out</h2>
        <div className="wgrid">
          {benefits.map((item, index) =>(
            <div key={index} className="wcard">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="intellibridge">
        <h5>Strategic Partnership</h5>
        <h1>Partnering With L&D to Build Future-Ready Teams</h1>
        <h4>At Intellibridge, we believe upskilling is most effective when it aligns with business goals, learner needs, and measurable outcomes. That's why we work as an extension of your L&D function—bringing industry expertise, structured learning design, and hands-on delivery that accelerates capability growth across your workforce.</h4>
        <h2>A Strategic Learning Partner</h2>
        <h3>Not Just a Training Provider</h3>
        <p>Intellibridge complements L&D teams with expertise in digital skills,
          data-led transformation, automation, AI adoption, and leadership
          communication.
        </p>
        <ul className="expert">
          {strategicPoints.map((point, index)=> (
            <li key={index}>✅ {point}</li>
          ))}
        </ul>

        <h3>Together, We Design Learning Journeys That Are:</h3>
        <ul className="journey">
          {journeyFeatures.map((feature, index)=> (
            <li key={index}>📌 {feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}