import React, { useState } from "react";
import "../styles/Domains.css";

export default function Domains(){
  const [selectedDomain, setSelectedDomain] =useState(null);

  const arr =[
    {
      name:"Technology",
      description:"Master the latest in software development, cloud computing, cybersecurity, and digital transformation.",
      courses:29,
      topics:[
        "Web Development",
        "Cybersecurity",
        "DevOps & CI/CD",
        "AI & Machine Learning",
        "Cloud Computing",
        "Data Science",
      ],
      highlights:["Hands-on projects & real world scenarios",
        "Industry expert instructors",
        "Latest tools & frameworks",
      ],
      duration:"8-12 weeks per course",},

    {
      name:"Marketing",
      description:"Grow your skills with cutting-edge digital marketing, brand management, and consumer analytics courses.",
      courses: 21,
      topics:[
        "Content Marketing",
        "SEO & SEM",
        "Social Media Marketing",
        "Brand Management",
        "Digital Analytics",
        "Consumer Behavior", ],
      highlights:["Case studies & industry tools",
         "Expert-led sessions",
        "Practical assignments",
      ],
      duration:"8-12 weeks per course",
    },
    {
      name:"Business Communication",
      description:"Enhance collaboration, leadership communication, and cross-functional influence across the organization.",
      courses: 10,
      topics: [
        "Executive Communication",
        "Team Facilitation",
        "Storytelling & Presentations",
        "Writing for Impact",
        "Negotiation Skills",
        "Cross-functional Influence",
      ],
      highlights:["Role-play based simulations",
        "Leadership coaching insights","Peer feedback loops",
      ],
      duration:"2-10 weeks per course",
    },
    {
      name:"Finance",
      description:
        "Build financial acumen with training in analysis, budgeting, forecasting, and strategic decision-making.",
      courses:10,
      topics:[
        "Financial Analysis",
        "Budgeting & Planning",
        "Corporate Finance",
        "Risk Management",
        "Investment Strategies",
        "Data-driven Finance",
      ],
      highlights:["Real-world simulations","Scenario-based projects",
        "Simplified concepts for business impact",
      ],
      duration:"2-10 weeks per course",
    },
    {
      name:"Human Resources",
      description:"Strengthen people-first teams with modern HR strategy, analytics, and culture-building capabilities.",
      courses: 12,
      topics: [
        "Talent Acquisition (All Levels)",
        "Onboarding Excellence (All Levels)",
        "Performance Management (All Levels)",
        "HR Analytics (Intermediate)",
        "Employee Engagement (All Levels)",
        "HR Strategy (Intermediate)",
      ],
      highlights: [
        "Case-driven workshops",
        "Employee experience focus",
        "HR analytics toolkits",
        "Change management support",
      ],
      duration: "2-6 weeks per course",
    },
    {
      name:"Sales",
      description:"Equip revenue teams with consultative selling skills, sales enablement, and account growth strategies.",
      courses: 14,
      topics:[
        "Consultative Selling (All Levels)",
        "Account Growth (Intermediate)",
        "Sales Playbooks (Intermediate)",
        "Negotiation Techniques (All Levels)",
        "Pipeline Management (Intermediate)",
        "Customer Success & Alignment (All Levels)",
      ],
      highlights:["Deal strategy labs",
        "Role-playing simulations",
        "Live coaching sessions",
        "Sales enablement toolkits",
      ],
      duration:"2-6 weeks per course",
    },
  ];
  // If a domain is selected, show only that one
  const domainsToShow =selectedDomain
    ? arr.filter((domain)=>domain.name === selectedDomain)
    : arr;

  return (
    <section id="domains" className="domains">
      <h5>Our Domains</h5>
      <h2>Expert Training Across Six Key Domains</h2>
      <p>
        Our programs are designed and delivered by industry experts to ensure
        your team gains practical, relevant skills.
      </p>

      <div className="domstr">
        {domainsToShow.map((domain, index)=>(
          <div key={index} className="dombox">
            <h3>{domain.name}</h3>
            <p>{domain.description}</p>
            <p>
              <strong>{domain.courses}+ Courses Available</strong>
            </p>

            <div className="dsec">
              <h4>Core Topics</h4>
              <ul>
                {domain.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="dsec">
              <h4>Program Highlights</h4>
              <ul>
                {domain.highlights.map((item, i)=>(
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              <strong>Duration:</strong>{domain.duration}
            </p>

            <button className="ebtn" onClick={()=>setSelectedDomain(domain.name)}> Explore Courses</button>
          </div>
        ))}
      </div>
      {selectedDomain && (
        <button className="backbtn" onClick={()=>setSelectedDomain(null)}>Back to All Domains</button>
      )}
    </section>
  );
}