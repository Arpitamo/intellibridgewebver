import React from "react";
import "../styles/Partner.css";

export default function Partner(){
  const comp=["Accenture", "Infosys", "TCS", "Wipro", "HCL Technologies", "Tech Mahindra"];

  return (
    <section className="partner">
      <h2>Our Trusted Partners</h2>
      <p>Empowering teams at leading organizations worldwide.</p>
      <div className="slide">
        <div className="ptrack">
          {/*duplicates arry for infinte loop*/}
          {[...comp, ...comp].map((name, i) => (
            <div key={i} className="pcard">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}