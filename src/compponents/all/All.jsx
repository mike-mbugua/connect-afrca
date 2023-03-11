import React from 'react'
import './all.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Culture1 from "./../../images/Culture1.jpg"
import KenyaL from "./../../images/KenyaL.jpg"
import KenyaL2 from "./../../images/KenyaL2.jpg"
import  Lion2 from "./../../images/Lion2.jpeg"
import Navbar from '../Navbar/Navbar';
import Uganda1 from '../../images/Uganda1.jpg'
import Uganda2 from '../../images/Uganda2.jpg'
import Tanzania2 from '../../images/Tanzania2.jpg'
import Tanzania1 from '../../images/Tanzania1.jpg'
import Rwanda1 from '../../images/Rwanda1.jpg'
import Rwanda2 from '../../images/Rwanda2.jpg'


const All = () => {
    return (
        <div className='all-container'>
            <div className="all-nav">
                <Navbar/>
            </div>
            <div className='heading'><h2>All in one Experience</h2></div>
            <div className="paragraph">
            All in one experience this is where you get to  visit a country or two countries in Africa  and get to enjoy all that the country has.Well  i know its impossible to enjoy everything that a country has,But we “connect Africa”  have made it possible for you to  enjoy everything.To simplify what a country have we have  made it possible by dividing the experiences into three;    
            <ul>
                    <p><ul><span>Culture:</span></ul>Learn about different cultures of  the visited country</p>
                    <p><ul><span>Luxury:</span></ul>Enjoy luxurious Experiences that a particular country has to offer.</p>
                    <p><ul><span>Wildlife</span></ul>Visit Wild Life tourists attractions that a particular country have.</p>
                </ul>
                This All in one Experience We offer it with countries that we have partnered with.Each country has different pricing. To make things simpler for you “tourist” we charge The All in One experience as a package and get all the three mentioned above experiences.
                The charges are inclusions of accommodations and transport.
            </div>
                <div className="cards">
                <div className="card1">
                    <div className='all-carousel'>
                    <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showArrows
                    showThumbs
                    >
                        <img src={Tanzania1} alt="" height="300"  />
                        <img src={Tanzania2} height="300" alt="" />
                        <img src={KenyaL2} height="300" alt="" />
                        <img src={Culture1} height="300" alt="" />
                    </Carousel>
                    </div>
                            <h3 className='country'>Tanzania</h3>
                            <p>
                            Tanzania is a popular East African destination known for its wildlife, including the Serengeti National Park and Ngorongoro Crater, home to the Big Five and the Great Migration. It's also home to Africa's tallest mountain, Mount Kilimanjaro, and beautiful beaches in Zanzibar. Tanzania offers a rich culture and history with over 120 ethnic groups, and luxurious lodges such as Singita Grumeti and &Beyond.
                            </p>
                    </div><div className="card1">
                    <div className='all-carousel'>
                    <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showArrows
                    showThumbs
                    >
                        <img src={Rwanda1} height="300"  alt="" />
                        <img src={Rwanda2} height="300" alt="" />
                        <img src={KenyaL2} height="300" alt="" />
                        <img src={Culture1} height="300" alt="" />
                    </Carousel>
                    </div>
                            <h3>Rwanda</h3>
                            Rwanda, known as the "Land of a Thousand Hills," is a top East African destination for gorilla trekking in Volcanoes National Park. It offers breathtaking scenery, including Lake Kivu and Nyungwe Forest, and unique cultural experiences such as visiting the Iby'Iwacu Cultural Village. Rwanda has luxurious lodges like Bisate Lodge and One&Only Nyungwe House, and is a safe and stable country to visit.
                    </div>
                </div>
                <div className="cards">
                <div className="card1">
                    <div className='all-carousel'>
                    <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showArrows
                    showThumbs
                    >
                        <img src={Uganda1}  height="300" alt="" />
                        <img src={Uganda2} height="300" alt="" />
                        <img src={KenyaL2} height="300" alt="" />
                        <img src={Culture1} height="300" alt="" />
                    </Carousel>
                    </div>
                            <h3>Uganda</h3>
                            Uganda, the "Pearl of Africa," offers unique gorilla trekking and chimpanzee tracking experiences, beautiful national parks like Murchison Falls and Queen Elizabeth, cultural experiences with over 50 ethnic groups, and luxurious accommodations such as Baker's Lodge and Sanctuary Gorilla Forest Camp. It's also a popular destination for birdwatching and outdoor adventures on the Nile River.
                    </div><div className="card1">
                    <div className='all-carousel'>
                    <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showArrows
                    showThumbs
                    >
                        <img src={Lion2} height="300"  alt="" />
                        <img src={KenyaL} height="300" alt="" />
                        <img src={KenyaL2} height="300" alt="" />
                        <img src={Culture1} height="300" alt="" />
                    </Carousel>
                    </div>
                            <h3>Kenya</h3>
                            Kenya is a top tourist destination in East Africa, boasting stunning wildlife including the Big Five, unique cultures of over 40 ethnic groups, and luxurious accommodations. Popular attractions include the Maasai Mara, Amboseli, and Tsavo national parks, cultural experiences such as visiting Maasai villages, and luxurious lodges such as Giraffe Manor and Angama Mara.
                    </div>
                </div>
        </div>
    )
}

export default All