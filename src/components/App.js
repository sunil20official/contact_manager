import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);    /* we have created the stateof contacts by assigning the empty   array inside the useState the empty array inside this useAtate represents the initial state  */

   const addContactHandler = (contact) => {
     console.log(contact);
     setContacts([...contacts,{id: uuid(), ...contact}]);
   };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

   useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     setContacts(retrieveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contact = {contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
