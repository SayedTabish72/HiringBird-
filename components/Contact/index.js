import React from "react";
import Footer from "../common/components/Footer";
import Navbar from "../common/components/Navbar";
import ContactForm from "./ContactForm";
import Contactus from "./ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Contactus />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
