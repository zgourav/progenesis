import React from "react";
import '../about/AboutMain.css'
import OpenionLanding from "./OpenionLanding";
import OpinionNav from "./OpinionNav";
import OpinionContent from "./OpinionContent";
import OpinionBenefits from "./OpinionBenefits";
import OpinionStats from "./OpinionStats";
import OpinionCare from "./OpinionCare";
import OpinionConsultation from "./OpinionConsultation";

const OpenionMain = () => {
      return (
        <div>
        <OpenionLanding />
        <OpinionNav />
        <OpinionContent />
        <OpinionBenefits />
        <OpinionStats />
        <OpinionCare />
        <OpinionConsultation />
        </div>
      )
}

export default OpenionMain