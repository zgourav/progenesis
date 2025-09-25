import React from "react";
import '../about/AboutMain.css'
import EmiLanding from './EmiLanding'
import EmiNav from './EmiNav'
import EmiOverview from './EmiOverview'
import EmiDocuments from './EmiDocuments'

const EmiMain = () => {
      return (
        <div>
        <EmiLanding />
        <EmiNav />
        <EmiOverview />
        <EmiDocuments />
        </div>
      )
}

export default EmiMain