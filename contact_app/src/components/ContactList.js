import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
// import { useContactsCrud } from "../context/ContactsCrudContext"
const ContactList = (props) => {
      //get id from contact card
      //const contacts = [{
      // id:"1",
      //  "name":"Dipesh",
      // "email":"cs@gmail.com"
      //}]
     
    const renderContactList= props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact} > </ContactCard>
        )
    })
    return(
        <div class="main">
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2>Contact List
                
            
                
            </h2>
        <div className="ui celled list">
           {renderContactList}
        </div>
        </div>
    )
}
export default ContactList;