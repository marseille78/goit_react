import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    existContact: false,
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return filter.trim().length === 0
      ? contacts
      : contacts.filter(({ name }) => name.toLowerCase().search(filter) !== -1);
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (this.checkExistContact(name)) {
      this.setState({ existContact: true });
      return;
    } else {
      this.setState({ existContact: false });
    }

    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  checkExistContact = (newName) => {
    if (this.state.contacts.find(({ name }) => name === newName)) {
      return true;
    }
    return false;
  };

  render() {
    const { existContact } = this.state;

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
              addContact={this.addContact}
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
            <Filter changeFilter={this.changeFilter} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ContactList visibleContacts={this.getVisibleContacts()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
