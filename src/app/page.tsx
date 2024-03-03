import styles from './page.module.scss';
import Contacts from './Contacts/Contacts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Contacts />
    </main>
  );
}

/*
_contact card
  -birthday(calender)
  -name (first,last,middle)
  -job
  -phone(home,cell,work)
  -email

_add contact form
_searchbar
  -responsive to names returning based on current full or partials updating as typed
_update/edit/delete to added contacts

*/
