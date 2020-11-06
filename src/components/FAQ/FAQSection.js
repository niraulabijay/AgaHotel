import React, {useEffect, useState} from 'react'

const FAQSection = ({questions}) => {
    return (
      <div className="col-sm-6">
        <div className="faq-content">
          {questions.map((question, index) => (
            <React.Fragment key={question.id}>
              <div
                className="text collapsed "
                data-toggle="collapse"
                data-target={"#collapseOne" + question.id}
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div className="ques">
                  <div
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  />
                </div>
                <div className="arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </div>
              <div
                className="para collapse show"
                id={"collapseOne" + question.id}
              >
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
}

export default FAQSection

{/* <li><a className="faq-btn active" href="" onClick={()=> handleActive(1)}>General</a> </li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(2)}> Booking</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(3)}> Rooms</a></li>
        <li><a href="" className="faq-btn" onClick={()=> handleActive(4)}>Payments</a> </li>  */}

{/* */}
            