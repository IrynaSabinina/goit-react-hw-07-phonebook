// import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import styles from './Contacts.module.css';
import { filterSelector, contactsSelector } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction } from 'redux/actions';

// {
//   contacts, contactDelete=deleteAction
// }

export const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  // console.log(contacts);
  // console.log(filter);

  const avaliableContacts = contacts.filter(({ name }) =>
    name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {avaliableContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              contactDelete={id => dispatch(deleteAction(id))}
            />
          );
        })}
      </ul>
    </div>
  );
};
