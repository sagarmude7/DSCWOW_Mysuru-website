import React from "react";
import Article from './ArticleandFAQComponents/Articles'
import FAQ from './ArticleandFAQComponents/FAQ'
import Footer from '../components/MainPageComponents/Footer'
import Navbar from '../components/MainPageComponents/Navbar'
import './ArticlePage.css'
const ArticlePage = ()=>{
    return(
        <div className="App">
            <Navbar/>
            <Article/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default ArticlePage;