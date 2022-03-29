import React from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
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
