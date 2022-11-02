import React from "react";
import Footer from "../../Components/Footer /Footer";
import Header from "../../Components/Header/Header";
import "./Contacts.css";

const Contacts = () => {
    return(
        <div>
            <Header />
            <h1>Contact </h1>
            <form className="Contact">
            <p>Enter Name</p>
            <input placeholder="Your Name" />
            <p>Enter Email</p>
            <input placeholder="Your Email id"/>
            <p>Mobile Number</p>
            <input placeholder="Your Mobile Number"/>
            <p>Message</p>
            <input placeholder="Enter the message"/><br></br><br></br>
            <button>Send</button>
            </form><br></br><br></br><br></br><br></br><br></br>
            <Footer />
        </div>

   );
 }
export default Contacts;