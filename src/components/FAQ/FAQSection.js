import React, {useEffect, useState} from 'react'

const FAQSection = ({questions}) => {
    return(
        <div className="col-sm-6">
                        <div className="faq-content">
                            {questions.map((question, index) => 
                                <React.Fragment key={question.id}>
                                <div className="text">
                                    <div className="ques">
                                        {question.question}
                                    </div>
                                    <div className="arrow">
                                        <i className="fas fa-greater-than"></i>
                                    </div>
                                </div>
                                <div className="para">
                                    {question.answer}
                                </div>
                                </React.Fragment>
                            )}
                        </div>
                </div> 
    )
}

export default FAQSection

{/* <li><a className="faq-btn active" href="" onClick={()=> handleActive(1)}>General</a> </li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(2)}> Booking</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(3)}> Rooms</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(4)}>Payments</a> </li>  */}

{/* */}
            