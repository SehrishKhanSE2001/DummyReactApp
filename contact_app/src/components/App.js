//import React from "react"
// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import React, {useState , useEffect} from "react"
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
//import api from "../api/contacts";
//import {ContactsCrudContextProvider} from "../context/ContactsCrudContext";
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
   setContacts([...contacts,contact]);
    console.log(contact.name);
  }
  
  useEffect( () => {
    const retrieve=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieve) setContacts(retrieve);
  }, [],
  
  )
  useEffect( () => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container"> 
    
      <Header />
      
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
      
    
    </div>
  );
}

export default App;
