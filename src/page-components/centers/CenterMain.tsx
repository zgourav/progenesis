import React from "react";
import '../about/AboutMain.css'
import CentersNav from './CentersNav'
import CentersLanding from "./CentersLanding";
import ResourceConsultation from "../resources/ResourceConsultation";

const CenterMain = () => {
  return (
    <div className="w-full [&>*:not([class*='bg-'])]:bg-[#F6F6F6]">
      <CentersLanding />  
      <CentersNav />
      <ResourceConsultation />
    </div>
  )
}

export default CenterMain