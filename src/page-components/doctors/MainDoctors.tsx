import React from 'react'
import DoctorBanner from './DoctorsBanner'
import '../about/AboutMain.css'
import DoctorsInfo from './DoctorsInfo'
import ResourceConsultation from '../resources/ResourceConsultation'
import DoctorsPart from './DoctorsPart'
const MainDoctors = () => {
  return (
    <div >
        <DoctorBanner/>
        <DoctorsInfo />
        <DoctorsPart />
        <ResourceConsultation />
    </div>
  )
}
export default MainDoctors 