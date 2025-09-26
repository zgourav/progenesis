import React from "react";
import '../about/AboutMain.css'
import EmiLanding from './EmiLanding'
import EmiNav from './EmiNav'
import EmiOverview from './EmiOverview'
import EmiDocuments from './EmiDocuments'
import EmiCare from "./EmiCare";

const EmiMain = () => {
      return (
        <div>
        <EmiLanding />
        <EmiNav />
        <EmiCare />
        <EmiOverview />
        <EmiDocuments />
        </div>
      )
}

export default EmiMain