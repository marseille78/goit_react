import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [existContact, setExistContact] = useState(false);

  useEffect(() => {
    const startContacts = localStorage.getItem("bookContacts");
  
    if (startContacts) {
      setContacts(JSON.parse(startContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookContacts", JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    return filter.trim().length === 0
      ? contacts
      : contacts.filter(({ name }) => name.toLowerCase().search(filter) !== -1);
  };

  const changeFilter = (filterString) => {
    setFilter(filterString);
  };

  const addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (checkExistContact(name)) {
      setExistContact(true);
      return;
    } else {
      setExistContact(false);
    }

    setContacts(stateContacts => [newContact, ...stateContacts]);
  };

  const checkExistContact = (newName) => {
    if (contacts.find(({ name }) => name === newName)) {
      return true;
    }
    return false;
  };

  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <h1>Phonebook</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <ContactForm
              addContact={addContact}
              existContact={existContact}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Contacts</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Filter changeFilter={changeFilter} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ContactList visibleContacts={getVisibleContacts()} />
          </div>
        </div>
      </div>
  );
};

export default App;
