import React from "react";
import Navbar from './MainPageComponents/Navbar';
import Slides from './MainPageComponents/Slides';
import Description from './MainPageComponents/Description';
import Footer from './MainPageComponents/Footer'

const MainPage= ()=>{
    return(
        <div className="main-page">
            <Navbar/>
            <Slides/>
            <Description/>
            <Footer/>
        </div>
    );
}

export default MainPage;