import PropTypes from "prop-types";

const ContactList = ({ visibleContacts }) => {
  return (
    <ul className="list-group">
      {visibleContacts.map(({ id, name, number }) => (
        <li className="list-group-item" key={id}>
          <b>{name}:</b> {number}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
