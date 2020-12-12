import React from "react";
import Article from './ArticleandFAQComponents/Articles'
import FAQ from './ArticleandFAQComponents/FAQ'
import './ArticlePage.css'
const ArticlePage = ()=>{
    return(
        <div className="App">
            <Article/>
            <FAQ/>
        </div>
    )
}

export default ArticlePage;