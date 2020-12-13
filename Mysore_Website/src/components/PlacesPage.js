import React from "react";
import Navbar from './MainPageComponents/Navbar';
import TopImg from './PlacesPageComponents/TopImg'
import PlacesCards from './PlacesPageComponents/PlaceCards'
import Footer from './MainPageComponents/Footer'
const PlacesPage = ()=>{
    return(
        <div>
            <Navbar/>
            <TopImg/>
            <PlacesCards/>
            <Footer/>
        </div>
    )
}

export default PlacesPage;