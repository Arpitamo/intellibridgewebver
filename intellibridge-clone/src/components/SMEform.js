import React, { useState } from "react";
import "../styles/SMEform.css";

export default function TrainerForm({ onClose }){
  const [formData, setFormData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedin: "",
    jobTitle: "",
    company: "",
    trainingExp: "",
    industryExp: "",
    primaryDomain: "",
    specializations: "",
    certifications: "",
    format: "",
    availability: "",
    timeZone: "",
  });
const [submitted, setSubmitted] = useState(false);
const hc = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hs =(e)=>{
    e.preventDefault();
    console.log("Trainer Application Submitted:", formData);
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      linkedin: "",
      jobTitle: "",
      company: "",
      trainingExp: "",
      industryExp: "",
      primaryDomain: "",
      specializations: "",
      certifications: "",
      format: "",
      availability: "",
      timeZone: "",
    });
    if (onClose) onClose();
  };

  return (
    <section id="SMEform" className="SMEform">
      <div className="smeform-header">
        <h2>Trainer Application Form</h2>
        <button type="button" className="sme-close" onClick={() => onClose && onClose()}>Close</button>
      </div>
      <form className="box" onSubmit={hs}>

        <h3>Personal Information</h3>
        <input name="firstName" placeholder="First Name*" required value={formData.firstName} onChange={hc} />
        <input name="lastName" placeholder="Last Name*" required value={formData.lastName} onChange={hc} />
        <input name="email" type="email" placeholder="Email Address*" required value={formData.email} onChange={hc} />
        <input name="phone" type="tel" placeholder="Phone Number*" required value={formData.phone} onChange={hc} />
        <input name="city" placeholder="City*" required value={formData.city} onChange={hc} />
        <input name="country" placeholder="Country*" required value={formData.country} onChange={hc} />
        <input name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={hc} />

        <h3>Professional Details</h3>
        <input name="jobTitle" placeholder="Current Job Title*" required value={formData.jobTitle} onChange={hc} />
        <input name="company" placeholder="Current Company*" required value={formData.company} onChange={hc} />
        <input name="trainingExp" placeholder="Total Training Experience*" required value={formData.trainingExp} onChange={hc} />
        <input name="industryExp" placeholder="Industry Experience*" required value={formData.industryExp} onChange={hc} />

        <h3>Expertise & Training Domains</h3>
        <select name="primaryDomain" required value={formData.primaryDomain} onChange={hc}>
          <option value="">Select Primary Training Domain*</option>
          <option value="Technology">Technology</option>
          <option value="Business Communication">Business Communication</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>
        <textarea name="specializations" placeholder="Specific Specializations" value={formData.specializations} onChange={hc}></textarea>
        <textarea name="certifications" placeholder="Certifications & Qualifications" value={formData.certifications} onChange={hc}></textarea>

        <h3>Training Preferences</h3>
        <select name="format" required value={formData.format} onChange={hc}>
          <option value="">Preferred Training Format*</option>
          <option value="Virtual/Online">Virtual/Online</option>
          <option value="In-person/On-site">In-person/On-site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Self-Paced Content Creation">Self-Paced Content Creation</option>
        </select>
        <input name="availability" placeholder="Availability per Month*" required value={formData.availability} onChange={hc} />
        <input name="timeZone" placeholder="Time Zone*" required value={formData.timeZone} onChange={hc} />

        <button type="submit">Submit Application</button>
      </form>
      {submitted && <p className="msg">Your application has been submitted successfully!</p>}
    </section>
  );
}