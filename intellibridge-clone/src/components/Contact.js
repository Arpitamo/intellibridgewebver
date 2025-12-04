import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <footer className="contact">
      <div className="newsletter">
        <h3>Join Our Newsletter</h3>
        <p>Stay updated with the latest training programs and industry insights</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footerg">
        <div className="cinfo">
          <h3>INTELLIBRIDGE</h3>
          <p>
            Empowering organizations with cutting-edge corporate training solutions. Expert-led programs
            designed to transform your workforce.</p>
          <p>Email: <a href="mailto:training@intellibridge.in">training@intellibridge.in</a></p>
          <p>Phone: +91 6360500764</p>
          <div className="location">
            <span>🌐 Remote</span>
            <span>🌍 Global Training</span>
            </div>
        </div>

        <div className="footerl">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Customized Training</a></li>
              <li><a href="#">Clear Learning</a></li>
              <li><a href="#">Team-based Learning</a></li>
              <li><a href="#">Online Courses</a></li>
            </ul>
          </div>
          <div>
            <h4>Domains</h4>
            <ul>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Business Communication</a></li>
              <li><a href="#">Finance</a></li>
           </ul>
          </div>
        </div>
      </div>
      <div className="foot">
        <h4>© 2024 intellibridge. All rights reserved.</h4>
        <h5>Privacy Policy &nbsp;&nbsp; Terms of Service &nbsp;&nbsp; Cookie Policy</h5>
        <h6>Powered by intellibridge</h6>
      </div>
    </footer>
  );
}