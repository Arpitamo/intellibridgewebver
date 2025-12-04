import React from "react";
import "../styles/Services.css";

export default function Services() {
  const services=[
    {title:"INSTRUCTOR-LED TRAINING",
      desc:
        "Interactive classroom sessions with expert trainers delivering engaging, hands-on learning experiences.",
      points:[
        "Live interactive Q&A sessions",
        "Real-time Q&A and  discussions",
         "Hands-on practical exercises",
         "Immediate feedback and support",
         "Group activities and workshops",
         "Duration: Full-day or Multi-day",
         "Format: On-site or Virtual",
      ],
    },
    {title:"VIRTUAL TRAINING",
      desc:
        "Flexible online training programs that bring expert instruction to your team from anywhere in the world.",
      points:[
        "Live online classes",
        "Interactive lab sessions",
        "Breakout room activities",
        "Digital collaboration tools",
        "Recorded sessions for review",
        "Duration: Flexible scheduling",
        "Format: Live online",
      ],
    },
    { title:"SELF-PACED LEARNING",
      desc:
        "Comprehensive e-learning modules that allow employees to learn at their own pace with full flexibility.",
      points:[
        "On-demand video lessons",
        "Interactive exercises",
        "Downloadable resource",
        "24/7 access to materials",
        "Progress tracking dashboard",
         "Duration: Anytime access",
         "Format: Online Platform",
      ],
    },
    { title:"WORKSHOP & SEMINARS",
      desc:
        "Intensive focused sessions designed to rapidly upskill teams on specific topics or emerging trends.",
      points:[
        "Concentrated topic coverage",
        "Collaborative group work",
        "Case study analysis",
        "Best practices sharing",
        "Action plan development",
        "Duration: Half-day to 2 days",
       "Format: On-site or Hybrid",
      ],
    },
    {title:"COACHING & MENTORING",
      desc:
        "Personalized one-on-one guidance to develop leadership skills and accelerate professional growth.",
      points:[
        "Leadership skill sessions",
        "Personalized development plans",
        "Regular progress reviews",
        "Goal-setting and tracking",
        "Confidential support",
         "Duration: 3-6 months",
        "Format: Virtual or In-person",
      ],
    },
    {
      title:"CORPORATE CERTIFICATION",
      desc:
        "Industry-recognized certification programs that validate skills and enhance professional credentials.",
      points:[
        "Structured curriculum",
        "Certification exam preparation",
        "Industry-recognized credentials",
         "Ongoing learning support",
        "Alumni network access",
        "Duration: 4-12 weeks",
        "Format: Blended Learning",
      ],
    },
  ];

  return(
    <section id="services" className="services">
      <h5>Our services</h5>
      <h2>Comprehensive Training Solutions</h2>
      <p>
        From instructor-led workshops to corporate certification, we offer diverse formats to meet your
        organization's unique needs and learning preferences.
      </p>
      <div className="sgrid">
        {services.map((service, index) =>(
          <div key={index} className="scard">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul>
              {service.points.map((point, i)=>(
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}