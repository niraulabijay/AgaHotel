import React,{useEffect} from 'react'
import FixedNavbar from '../components/FixedNavbar'
import "../components/FAQ/FAQCSS.css"
import Contact from '../components/FAQ/Contact'
import FAQContent from '../components/FAQ/FAQContent'


const FAQ = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        document.getElementById("mySidenav").style.width = "0";
      },[])
    return(
        <>
        <div className="fixed-navbar">
        <FixedNavbar />
        </div>
        <div className="faqs-content">
        <section id="faq">
            <div className="container">
                <FAQContent />
                <Contact />
            </div>
        </section>
        </div>
        </>
    )
}

export default FAQ