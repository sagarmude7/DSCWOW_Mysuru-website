import React, { useState } from "react"
import './FAQ.css'
function FAQ() {
    const QArray = [{
        id:"0",
        question:"What is famous about Mysore?",
        answer:"Beautiful Palaces. Rich cultural heritage"
    },{
        id:"1",
        question:"What is not so good about Mysore? ",
        answer:"Communication with locals can be difficult."
    },{
        id:"2",
        question:"Who should visit Mysore?",
        answer:"Mysore is a beautiful city for everyone who wishes to enjoy the grandeur of a royal kingdom"
    },{
        id:"3",
        question:"What is the best time to visit Mysore?",
        answer:"Mysore has a tropical climate, but the best time to visit Mysore is from the Monsoons and Winter months from July to February. The months have pleasant weather as a respite from the intense heat of summer. With these months captivating the city's beauty; summers are less ideal for travelling and sightseeing."
    },{
        id:"4",
        question:"What is the local food in Mysore?",
        answer:"The cuisine of Mysore has a distinct influence of Udipi cuisine on its dishes. One of the most famous items here is the traditional sweet, Mysore Pak. Other than this, Mysore's platter is brimming with authentic, traditional and local cuisines. These include Idli, Dosa, Shavige Bath, Pongal, Chutneys and Pickles, Vangi Baath (rice with Brinjal curry), Bisi bele bath (a spicy preparation of rice) as well as a number of sweets such as Payasam, Jalebi, Rave Unde, Ladoo and more. Indian filter coffee and Adike (Areca nut) with Betel leaf are also popular items."
    },{
        id:"5",
        question:"What is the best way to reach Mysore? ",
        answer:"Mysore is one of the more well-connected cities in Karnataka and is accessible through road, rail and air. Although Mysore has its own airport, it is not fully functional and doesn't connect to all major cities. So tourists can access Mysore through the Bangalore airport (170km). Getting on a train to the Mysore railway station is a very convenient way of travel as daily trains ply here. Bus services are also regularly running and finding a seat is never a problem."
    },{
        id:"6",
        question:"What are the things to do in Mysore?",
        answer:"The top things to do in Mysore are Mysore Palace, Brindavan Gardens, Somanathapura Temple, Mysore Zoo, Chamundeshwari Temple, Shuka Vana. You can see all the places to visit in Mysore"
    },{
        id:"7",
        question:"What are the places near Mysore? ",
        answer:"The top places near to Mysore are Ooty which is 98 km from Mysore, Coorg which is located 98 km from Mysore, Kabini which is located 20 km from Mysore, Wayanad which is located 88 km from Mysore, Srirangapatna which is located 14 km from Mysore"
    }];
    const [dropdown, setDropdown] = useState({
        "What is famous": false,
        "What is not so": false,
        "Who should vis": false,
        "What is the be": false,
        "What is the lo": false
    })
    const x = {
        "What is famous": false,
        "What is not so": false,
        "Who should vis": false,
        "What is the be": false,
        "What is the lo": false
    }

    function dropdownFunction(e) {
        const name = e.target.textContent.slice(0, 14)
        setDropdown({
            ...x,
            [name]: !dropdown[name]
        })

    }
    return <div className="Faq-container">
        <h1 className="Faq-container-header">Frequently Asked Questions</h1>
        <div>
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>{QArray[0].question}</h2>
                <h2 className="drop-down-sign">{dropdown["What is famous"] ? <i class='fas fa-angle-up' style={{fontSize:"36px"}}></i> : <i class='fas fa-angle-down' style={{fontSize:"36px"}}></i> }</h2>
            </div>
            {dropdown["What is famous"] && <h2 className="drop-down-para">{QArray[0].answer}</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>{QArray[1].question}</h2>
                <h2 className="drop-down-sign">{dropdown["What is not so"] ? <i class='fas fa-angle-up' style={{fontSize:"36px"}}></i> : <i class='fas fa-angle-down' style={{fontSize:"36px"}}></i>}</h2>
            </div>
            {dropdown["What is not so"] && <h2 className="drop-down-para">{QArray[1].answer}</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>{QArray[2].question}</h2>
                <h2 className="drop-down-sign">{dropdown["Who should vis"] ? <i class='fas fa-angle-up' style={{fontSize:"36px"}}></i> : <i class='fas fa-angle-down' style={{fontSize:"36px"}}></i>}</h2>
            </div>
            {dropdown["Who should vis"] && <h2 className="drop-down-para">{QArray[2].answer}</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>{QArray[3].question}</h2>
                <h2 className="drop-down-sign">{dropdown["What is the be"] ? <i class='fas fa-angle-up' style={{fontSize:"36px"}}></i> : <i class='fas fa-angle-down' style={{fontSize:"36px"}}></i>}</h2>
            </div>
            {dropdown["What is the be"] && <h2 className="drop-down-para">{QArray[3].answer}</h2>}
            <div onClick={dropdownFunction} className="faq-container" >
                <h2>{QArray[4].question}</h2>
                <h2 className="drop-down-sign">{dropdown["What is the lo"] ? <i class='fas fa-angle-up' style={{fontSize:"36px"}}></i> : <i class='fas fa-angle-down' style={{fontSize:"36px"}}></i>}</h2>
            </div>
            {dropdown["What is the lo"] && <h2 className="drop-down-para">{QArray[4].answer}</h2>}
        </div>
    </div>
}

export default FAQ