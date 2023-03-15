import React from 'react'
import './Card.css'
function Card({img,country,heading,btn,list1,list2,list3,list4,list5,list6,list7,list8}) {
return (
    <div className="luxurymain">
            <div className='card-container'>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="card-info">
            <div className='card-headers'>
                <h2>{country}</h2>
                <h3>{heading}</h3>
            </div>
            <div className="second-part">
                <div className='custom'>
                    <h3 className='custom-button'>usd{btn}</h3>
                </div>
                <div className='line'></div>
                <div className="luxury-list">
                    <div className="list1">
                        <ol>{list1}</ol>
                        <ol>{list2}</ol>
                        <ol>{list3}</ol>
                        <ol>{list4}</ol>
                    </div>
                    <div className="list1">
                        <ol>{list5}</ol>
                        <ol>{list6}</ol>
                        <ol>{list7}</ol>
                        <ol>{list8}</ol>
                    </div>
                </div>
            </div>
            
            <div>

            </div>
        </div>
    </div>
    </div>
)
}

export default Card