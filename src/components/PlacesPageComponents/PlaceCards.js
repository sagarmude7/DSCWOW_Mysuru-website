import React from "react";

const PlaceCards = ()=>{
    const PlaceArray = [
        {
            placeName:"Mysore Palace",
            imgLink:"https://tse1.mm.bing.net/th?id=OIP.-6MMV3J-xs1ZJgehvEepzwHaE6&pid=Api&P=0&w=226&h=151",
            placedesc:"The former residence of the royal family of Mysore, the Mysore Palace is an extremely breath-taking example",
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d17381539-Reviews-Mysore_Palace-Mysuru_Mysore_Mysore_District_Karnataka.html"    
        }, {
            placeName:"Bonsai Garden",
            imgLink:"https://tse4.mm.bing.net/th?id=OIP.cyI6CgFHIa-Nap4FLwAYlQHaD1&pid=Api&P=0&w=324&h=168",
            placedesc:"The Bonsai Garden of Mysore is home to over a 100 different varieties of Bonsai trees spread across a vast estate .",
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d12230038-Reviews-Kishkindha_Molika_Bonsai_Garden-Mysuru_Mysore_Mysore_District_Karnataka.html"     
        }, {
            placeName:"Brindavan Garden",
            imgLink:"http://image3.mouthshut.com/images/Restaurant/Photo/-70858_10208.jpg",
            placedesc:"Built across the Kaveri river, these beautiful gardens were constructed by Krishnaraja Wodeyar. " ,
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d1216820-Reviews-Brindavan_Garden-Mysuru_Mysore_Mysore_District_Karnataka.html"     
        }, {
            placeName:"Chamundeshwari temple",
            imgLink:"https://live.staticflickr.com/2870/8935625862_639df32376_b.jpg",
            placedesc:"Built atop the Chamundi Hills, this temple dates back to the 12th century. ",
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d500202-Reviews-Sri_Chamundeshwari_Temple-Mysuru_Mysore_Mysore_District_Karnataka.html"      
        }, {
            placeName:"Sri Venugopala Swamy Temple",
            imgLink:"https://tse3.mm.bing.net/th?id=OIP.VVdqghFF3mUrw44gjNSuJAHaE8&pid=Api&P=0&w=253&h=170",
            placedesc:"The Venugopala Swamy Temple located at Hosa Kannambadi, near Krishna Raja Sagara.",
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d3660334-Reviews-Venugopala_Swamy_Temple-Mysuru_Mysore_Mysore_District_Karnataka.html"
        }, {
            placeName:"Somnathpura Temple",
            imgLink:"https://tse4.mm.bing.net/th?id=OIP.MC385DdejSbEx4IMIDYW1gHaE9&pid=Api&P=0&w=233&h=157",
            placedesc:"The village is named after Somnath, the commander of the Hoysala army who founded this place." ,
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d325164-Reviews-Somnathpur_Temple-Mysuru_Mysore_Mysore_District_Karnataka.html"     
        },{
            placeName:"Mysore Zoo",
            imgLink:"https://citytoday.news/wp-content/uploads/2018/09/Mysuru-zoo-sept-19-780x405.jpg",
            placedesc:"Stand in awe at this iconic Neolithic stone structure. Lorem ipsum dolor sit amet, consectetur..",
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d500203-Reviews-Sri_Chamarajendra_Zoological_Gardens-Mysuru_Mysore_Mysore_District_Karnataka.html"     
        },{
            placeName:"GRS Fantasy Park",
            imgLink:"https://in.bmscdn.com/nmcms/media-base-grs-fantasy-park-2019-2-11-t-19-22-8.jpeg",
            placedesc:"GRS Fantasy Park is a theme based amusement park and one of the favorites among the locals of Mysore." ,
            tripLink:"https://www.tripadvisor.in/Attraction_Review-g304553-d2651314-Reviews-GRS_Fantasy_Park-Mysuru_Mysore_Mysore_District_Karnataka.html"
        }
    ]
    //<img src={place.imgLink} alt="Norway" style={{width:"100%"}} class="w3-hover-opacity"></img>
      //                      <div class="w3-container w3-white">
        //                        <p><b>{place.placeName}</b></p>
          //                      <p>{place.placedesc}</p>
            //                </div> 
    return(
        <div class="container">
            <h1 class="center" style={{color:"aqua"}}>Places To visit</h1>   
            <section class='cards'>
                {
                    PlaceArray.map((place)=>
                        <div className="card">
                            <div class='card-inner'>
                                <div class='card-front'>
                                    <img class="card-img-top" src={place.imgLink} alt="News snap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{place.placeName}</h5>
                                        <p class="card-text">{place.placedesc}</p>
                                    </div> 
                                </div>
                                <div class='card-back' >
                                    <div class="center" style={{marginTop:"100px"}}>
                                        <h3>Plan a trip Now</h3>
                                    </div>
                                    <div class="center">
                                        <i class='far fa-hand-point-down' style={{fontSize:"48px",color:"yellow"}}></i>
                                    </div>      
                                    <div class="center" style={{marginTop:"40px"}}>
                                        <a class="btn btn-success" href={place.tripLink}> Go!!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default PlaceCards;
