import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    existContact: false,
  };

  componentDidMount = () => {
    const startContacts = localStorage.getItem("bookContacts");

    if (startContacts) {
      this.setState({ contacts: JSON.parse(startContacts) });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("bookContacts", JSON.stringify(this.state.contacts));
    }
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
