import React from 'react'
import Card from '../card/Card'
import './Culture.css'
import KenyaL from './../../images/KenyaL.jpg'
import MaraL from './../../images/MaraL.jpg'
import Rwanda1 from './../../images/Rwanda1.jpg'
import Rwanda2 from './../../images/Rwanda2.jpg'
import Tanzania1 from './../../images/Tanzania1.jpg'
import Tanzania2 from './../../images/Tanzania2.jpg'
import Uganda2 from './../../images/Uganda2.jpg'
import KenyaL2 from './../../images/KenyaL2.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
function Culture() {
return (
    <div className='culture-main'>
        <div className="culture-nav">
            <Navbar/>
        </div>
        <div className='heading'><h2>Cultural Experience</h2></div>
            <div className="paragraph">
            Cultural experience  this is whereby during your visitation to an African country you get to learn more about their cultures.The services may vary based on different countries.

Note This are just a few selected in the country there are more to this
            </div>
        <Card
        img={Uganda2}
        country="Uganda"
        heading={'Sarova hotel '}
        btn={" 30,000"}
        list1={'wifi'}
        list2={'wifi'}
        list3={"Parking"}
        list4={'wifi'}
        list5={'wifi'}
        list6={"Parking"}
        list7={'wifi'}
        list8={'wifi'}/>

<Card
        img={KenyaL2}
        country="Kenya"
        heading={'Sarova hotel '}
        button="3000"
        btn={" 30,000"}
        list1={'wifi'}
        list2={'wifi'}
        list3={"Parking"}
        list4={'wifi'}
        list5={'wifi'}
        list6={"Parking"}
        list7={'wifi'}
        list8={'wifi'}/>

<Card
        img={Tanzania1}
        country="Tanzania"
        heading={'Sarova hotel '}
        button="3000"
        btn={" 30,000"}
        list1={'wifi'}
        list2={'wifi'}
        list3={"Parking"}
        list4={'wifi'}
        list5={'wifi'}
        list6={"Parking"}
        list7={'wifi'}
        list8={'wifi'}/>

<Card
        img={Tanzania2}
        country="Tanzania"
        heading={'Sarova hotel '}
        button="3000"
        btn={" 30,000"}
        list1={'wifi'}
        list2={'wifi'}
        list3={"Parking"}
        list4={'wifi'}
        list5={'wifi'}
        list6={"Parking"}
        list7={'wifi'}
        list8={'wifi'}/>

<Card
        img={Rwanda1}
        country="Rwanda"
        heading={'Sarova hotel '}
        button="3000"
        btn={" 30,000"}
        list1={'wifi'}
        list2={'wifi'}
        list3={"Parking"}
        list4={'wifi'}
        list5={'wifi'}
        list6={"Parking"}
        list7={'wifi'}
        list8={'wifi'}/>

    <Footer/>
    </div>
)
}

export default Culture