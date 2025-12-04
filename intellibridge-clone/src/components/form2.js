import React, { useState } from "react";
import "../styles/form.css";

export default function Form(){
//FORM STATE
  const [formData, setFormData]=useState({// Updates the values when the user types.
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });
 const [submitted, setSubmitted] = useState(false);//tracks whether the form has been submitted
 const hc = (e) => {//hc[handle change] whenever we wil type anything
    setFormData({ ...formData, [e.target.name]: e.target.value }); //e.target.name matches the input’s name attribute 

  };
 const hs = (e) => {//handle submision
    e.preventDefault();//stops the page from refreshing
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectDetails: "",
    });
  };
//FAQ STATE
  const [openIndex, setOpenIndex] =useState(null);
  const faqs=[
    {qs:"What training formats do you offer?",
      ans:"We offer flexible training formats including on-site, virtual, and hybrid options. Our programs can be customized to fit your team's schedule and learning preferences."
    },
    {qs:"Do you provide certifications?",
      ans:"Yes, upon successful completion of our programs, participants receive industry-recognized certifications that validate their skills."
    },
    {qs:"What is the course duration?",
      ans:"Course duration varies depending on the program. Most training modules range from 4 weeks to 6 months."
    }
  ];
 const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
//RENDEr
  return(
    <section id="form" className="form">
      <h5>Contact us</h5>
      <h2>Let's Start Your Training Journey</h2>
      <div className="formc">
        {/* FORM */}
        <form className="box" onSubmit={hs}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            value={formData.firstName}
            onChange={hc}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={hc}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={hc}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={hc}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={hc}
          />
          <textarea
            name="projectDetails"
            placeholder="Project Details*"
            required
            value={formData.projectDetails}
            onChange={hc}
          ></textarea>
          <button type="submit">Send Message</button>{/*trigger handle submission*/}
        </form>

        {submitted && (
          <p className="msg">Your message has been submitted successfully!</p>
        )}

        {/* CONTACT INFO */}
        <div className="details">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong>training@intellipaat.in</p>
          <p><strong>Phone:</strong> +91 6060660444</p>
          <h3>Office Address</h3>
          <p>Remarks on the Training Available</p>
          <p>Global Reach</p>

          <h3>Social Media</h3>
          <div className="social">
            <span><img src="/linkedin.png" alt="linkedin" /></span>
            <span><img src="/facebook.png" alt="Facebook" /></span>
            <span><img src="/twitter.png" alt="twitter" /></span>
            <span><img src="/instagram.png" alt="insta" /></span>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="faq">
        <h3>FAQ</h3>
        <h1>Frequently Asked qss</h1>

        {faqs.map((item, index) =>(
          <div key={index} className="faq-item">
            <button
              className="faq-qs"
              onClick={() =>toggleFAQ(index)}
            >
              {item.qs}
            </button>

            {openIndex === index &&(
              <div className="faq-ans">
                <p>{item.ans}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}