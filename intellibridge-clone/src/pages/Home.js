import React, { useState } from "react";
import Hero from "../components/Subhead";
import Services from "../components/Services";
import Domains from "../components/Domains";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import Partner from "../components/Partner";
import Pjourney from "../components/pjourney";
import Form from "../components/form2";
import SMEform from "../components/SMEform";
import Ileaders from "../components/INDleaders";


export default function Home(){
  const [showSMEForm, setShowSMEForm]=useState(false);
  return(
    <>
      <Hero />
      <Partner/>
      <Services />
      <WhyUs />
      <Domains />
      <Pjourney onOpenSME={()=>setShowSMEForm(true)} />
      <Ileaders />
      <Form />
      {showSMEForm && <SMEform onClose={()=>setShowSMEForm(false)} />}
      <Contact />
    </>
  );
}