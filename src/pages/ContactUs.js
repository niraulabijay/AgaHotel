import React from "react";
import FixedNavbar from "../components/FixedNavbar";
import "../components/FAQ/FAQCSS.css";
import Contact from "../components/FAQ/Contact";
import ContactBanner from "../components/Contact/ContactBanner";
import FAQContent from "../components/FAQ/FAQContent";

function ContactUs() {
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <ContactBanner />
      <div className="faqs-content">
        <section id="faq">
          <div className="container contact-form">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;