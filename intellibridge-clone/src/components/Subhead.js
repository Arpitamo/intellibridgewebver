import React, { useState, useEffect } from "react";
import "../styles/Subhead.css";
import heroBg from "../styles/hero-bg.jpg"; 

export default function Sub() {
  const [slideIndex, setSlideIndex] = useState(0);
/*timing btw each slide*/
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % 4);}, 3000);

    return () => clearInterval(interval);
  }, []);

  const sorder = (index) => { /*slide order*/
    setSlideIndex(index);
  };

  return (
    <section className="subhead">
      <div className="content">
        {slideIndex === 0 &&(
        <>
            <h2>Partnering With L&D to Build Future-Ready Teams</h2>
            <p>
              Expert-led corporate training across Technology, Marketing, Finance,
              Sales, and Communication.
            </p>
            <div className="btnn">
              <button>Start Upskilling Today</button>
              <button>Watch Demo <span>&#9654;</span></button>
            </div>
          </>
        )}

        {slideIndex=== 1 && (
          <>
            <h2>Comprehensive Corporate Training Across Key Domains</h2>
            <p>
              Explore our complete catalog covering technology, marketing, finance, sales, and more.
            </p>
            <div className="features">
              <div>
                <strong>AI & Automation</strong>
                <p>Master cutting-edge AI tools and automation frameworks.</p>
              </div>
              <div>
                <strong>UI/UX & Design</strong>
                <p>Learn user-centered design and prototyping.</p>
              </div>
              <div>
                <strong>Data Analytics</strong>
                <p>Transform data into actionable insights.</p>
              </div>
              <div>
                <strong>Communication</strong>
                <p>Enhance leadership and presentation skills.</p>
              </div>
            </div>
            <div className="btnn">
              <button>Explore Our Programs →</button>
            </div>
          </>
        )}

        {slideIndex=== 2 && (
        <>
            <h2>Your Partner for Scalable, Impact-Driven Corporate Learning</h2>
            <p>
              We deliver training solutions that scale with your organization and drive measurable impact.
            </p>
            <ul className="features">
            <li>
                <strong>Tailored Programs</strong>Customized curriculum aligned with your objectives.
              </li>
              <li>
                <strong>Hands-On Delivery</strong>Interactive, project-based learning.
              </li>
              <li>
                <strong>Proven Outcomes</strong>98% satisfaction rate with measurable improvements.
              </li>
            </ul>
            <div className="btnn">
              <button>Explore Our Programs →</button></div>
          </>
        )}

        {slideIndex === 3 && (
          <>
            <h2>Scalable Learning for Every Team</h2>
            <p>
              Whether you're a startup or enterprise, our programs adapt to your goals and growth pace.
            </p>
            <ul className="features">
              <li>
                <strong>Flexible Formats</strong>Online, hybrid, and in-person delivery options.
              </li>
              <li>
                <strong>Expert Instructors</strong>Industry leaders with hands-on experience.
              </li>
              <li>
                <strong>Global Reach</strong>Training teams across 30+ countries.
              </li>
            </ul>
            <div className="btnn">
              <button>Get Started</button></div>
        </>
        )}

        <div className="navbtn">
          <button onClick={() => sorder(0)}></button>
          <button onClick={() => sorder(1)}></button>
          <button onClick={() => sorder(2)}></button>
          <button onClick={() => sorder(3)}></button>
        </div>
      </div>

      <div className="imgg">
        <img src={heroBg} alt="Background visual" />
      </div>
    </section>
  );
}