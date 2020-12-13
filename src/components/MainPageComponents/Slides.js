import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Mysore1 from './Images/Mysore1.jpg'
import Mysore2 from './Images/Mysore2.jpg'
import Mysore3 from './Images/Mysore3.jpg'
import Mysore4 from './Images/Mysore4.jpg'
import Mysore5 from './Images/Mysore5.jpg'

const Slides =()=>{
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Mysore1}
                alt="First slide"
                ></img>
                <Carousel.Caption>
                <h3>Mysore</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Mysore2}
                alt="Third slide"
                ></img>

                <Carousel.Caption>
                <h3>Mysore</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Mysore3}
                alt="Third slide"
                ></img>

                <Carousel.Caption>
                <h3>Mysore</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    )
}

export default Slides;

