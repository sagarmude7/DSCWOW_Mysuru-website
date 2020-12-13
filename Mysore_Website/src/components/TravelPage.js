import React from "react";

import Travel from './TravelPageComponents/Travel'
import Navbar from './MainPageComponents/Navbar'
import Footer from './MainPageComponents/Footer'

const TravelPage = ()=>{
    return(
        <div className="travel">
            <Navbar/>
            <Travel/>
            <Footer/>
        </div>
    )
}

export default TravelPage;