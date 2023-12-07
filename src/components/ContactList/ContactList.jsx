// import React from 'react';
// import ContactListItem from '../ContactListItem/ContactListItem';

// const ContactList = ({ contacts }) => {
//   return (
//     <ul>
//       {contacts.map(contact => (
//         <ContactListItem key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

////////////////////

import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ul_ContactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
