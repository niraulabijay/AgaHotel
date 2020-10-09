import React from 'react'
import FAQSection from './FAQSection'

const FAQContent = () => {
    return(
        <>
        <div className="faq-container">
                <div className="header">
                    <div className="title">
                        faq
                    </div>
                    <div className="text">
                        These are frequently asked questions.
                    </div>
                    <div className="text">
                        If you have any further question, please contact us.
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <ul className="faq-links">
                            <FAQSection />
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="faq-content">
                            <div className="text">
                                <div className="ques">
                                    Is it possible to check-in earlier?
                                </div>
                                <div className="arrow">
                                    <i className="fas fa-greater-than"></i>
                                </div>
                            </div>
                            <div className="para">
                                Is is sometimes possible to check in early however this is subject to availability.
                                <br />
                                To ensure your room is ready upon arrival, we recommend you reserve the room one night in advance.
                            </div>
                            <div className="text">
                                <div className="ques">
                                    Is it possible to check-in earlier?
                                </div>
                                <div className="arrow">
                                    <i className="fas fa-greater-than"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQContent