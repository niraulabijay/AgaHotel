import React from 'react'


const FAQSection = () => {
    const handleActive = (data) => {
        console.log(data)
    }
    return(
        <>
        <li><a className="faq-btn active" href="" onClick={()=> handleActive(1)}>General</a> </li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(2)}> Booking</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(3)}> Rooms</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(4)}>Payments</a> </li>
        </>
    )
}

export default FAQSection