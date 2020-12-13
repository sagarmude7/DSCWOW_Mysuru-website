
import React from "react";

import TopImg from './ActivitiesPageComponents/TopImg'
import Navbar from './MainPageComponents/Navbar'
import ExpHead from './ActivitiesPageComponents/ExperiencesHead'
const ActivitiPage = ()=>{
    return(
        <div className="u-body">
            <Navbar/>
            <TopImg/>
            <ExpHead/>
        </div>
    )
}

export default ActivitiPage;