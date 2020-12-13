import React from "react";
import Navbar from './MainPageComponents/Navbar'
import Gallery from './GalleryPageComponents/Gallary'

const GalleryPage = ()=>{
    return(
        <div className="GalleryPage">
            <Navbar/>
            <Gallery/>
        </div>
    )
}

export default GalleryPage;