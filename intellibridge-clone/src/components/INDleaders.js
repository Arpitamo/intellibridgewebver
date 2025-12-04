import React from "react";
import "../styles/Ileaders.css";

export default function INDleaders(){
  const comp=["K-Finance",
"Marketing-Pro"];

  return (
    <section className="partner">
      <h2>Trusted by Indian Leaders</h2>
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