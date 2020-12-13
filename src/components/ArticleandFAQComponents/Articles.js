import React from "react";
import './Articles.css'
const Articles=()=>{
    const ArtcilesObjArray=[{
        heading:"For a South Indian Culture Burst, Visit The Royal City of Mysore",
        link:"https://www.india.com/travel/articles/for-a-south-indian-culture-burst-visit-the-royal-city-of-mysore-3463498/",
        imageLink:"https://static.india.com/wp-content/uploads/2018/12/Mysore-palace.jpg",
    },{
        heading:"Alia Bhatt Shares Make-up Free Selfie in Bed From Mysore And We Are Just Loving it",
        link:"https://www.india.com/entertainment/alia-bhatt-shares-make-up-free-selfie-in-bed-from-mysore-and-we-are-just-loving-it-3812834/",
        imageLink:"https://static.india.com/wp-content/uploads/2019/10/alia.jpg"
    },{
        heading:"Here’s How to Explore Mysore as an Intrepid Traveller",
        link:"https://www.india.com/travel/articles/heres-how-to-explore-mysore-as-an-intrepid-traveller-3624854/",
        imageLink:"https://static.india.com/wp-content/uploads/2019/04/Mysore-at-night.jpg"
    },{
        heading:"No Room For PM Narendra Modi in Mysuru’s Iconic Lalitha Mahal Palace Hotel",
        link:"https://www.india.com/news/india/no-room-for-pm-narendra-modi-in-mysurus-iconic-lalitha-mahal-palace-hotel-2903023/",
        imageLink:"https://static.india.com/wp-content/uploads/2018/02/Iconic-hotel.jpg"
    },{
        heading:"7 Best Tourist attractions that make Mysore proud",
        link:"https://www.india.com/travel/articles/for-a-south-indian-culture-burst-visit-the-royal-city-of-mysore-3463498/",
        imageLink:"https://static.toiimg.com/thumb/msid-26909890,width-300,height-200/Brindavan-Gardens.jpg"
    },{
        heading:"Beat the heat in Southern hills with IRCTC’s 6N/7D Mysore-Ooty-Coorg package at INR 31900",
        link:"https://timesofindia.indiatimes.com/travel/destinations/beat-the-heat-in-southern-hills-with-irctcs-6n/7d-mysore-ooty-coorg-package-at-inr-31900/as69232948.cms",
        imageLink:"https://static.toiimg.com/photo/49935397/.jpg"
    },{
        heading:"The most amazing things to do in Mysore",
        link:"https://timesofindia.indiatimes.com/travel/things-to-do/The-most-amazing-things-to-do-in-Mysore/gs49935194.cms",
        imageLink:"https://static.toiimg.com/thumb/msid-49936292,width-300,height-200/Enjoy-Mysore-Dussehra.jpg"
    },{
        heading:"Places to visit in Mysore beyond royalty and heritage",
        link:"https://timesofindia.indiatimes.com/travel/mysore/travel-guide/places-to-visit-in-mysore-beyond-royalty-and-heritage/gs51680017.cms",
        imageLink:"https://static.toiimg.com/thumb/msid-51682275,width-300,height-200/Chamundi-Hills.jpg"
    },{
        heading:"Fun and offbeat things to do in Mysore",
        link:"https://timesofindia.indiatimes.com/travel/things-to-do/Fun-and-offbeat-things-to-do-in-Mysore/gs52446991.cms",
        imageLink:"https://static.toiimg.com/photo/52457010/.jpg"
    },{
        heading:"Mysuru and Hampi likely to get double-decker buses for sightseeing by December",
        link:"https://timesofindia.indiatimes.com/travel/destinations/mysuru-and-hampi-likely-to-get-double-decker-buses-for-sightseeing-by-december/as70973204.cms",
        imageLink:"https://tse1.mm.bing.net/th?id=OIP.h5vB0dAZLyssGQEkzDadewHaE8&pid=Api&P=0&w=259&h=173"
    },{
        heading:"Ward off your travel fatigue in the nightlife hubs in Mysore",
        link:"https://timesofindia.indiatimes.com/travel/nightlife/ward-off-your-travel-fatigue-in-the-nightlife-hubs-in-mysore/gs56871318.cms",
        imageLink:"https://static.toiimg.com/photo/56872092/.jpg"
    },{
        heading:"Tipu Sultan's Summer Palace in Bangalore is a must-visit, know why?",
        link:"https://timesofindia.indiatimes.com/travel/things-to-do/tipu-sultans-summer-palace-in-bangalore-is-a-must-visit-know-why/as68320942.cms",
        imageLink:"https://tse4.mm.bing.net/th?id=OIP.IGc2KwH0E7GpUXme-7loygHaFj&pid=Api&P=0&w=215&h=162"
    }]
    return(
        <div class="container">
            <h1 class="center" style={{color:"aqua"}}>Articles On Mysore</h1>   
            <section class='cards'>
                {ArtcilesObjArray.map((article)=>
                    <div className="card">
                        <div class='card-inner'>
                            <div class='card-front'>
                                <img class="card-img-top" src={article.imageLink} alt="News snap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{article.heading}</h5>
                                </div> 
                            </div>
                            <div class='card-back' >
                                <div class="center" style={{marginTop:"100px"}}>
                                    <h3>Read Full Article</h3>
                                </div>
                                <div class="center">
                                    <i class='far fa-hand-point-down' style={{fontSize:"48px",color:"yellow"}}></i>
                                </div>      
                                <div class="center" style={{marginTop:"40px"}}>
                                    <a class="btn btn-success" href={article.link}> Read</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}   
            </section>
        </div>
    )
        
}

export default Articles;