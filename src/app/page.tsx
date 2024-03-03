import Image from 'next/image';
import styles from './page.module.css';
import Contacts from './Contacts.tsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <Contacts />
    </main>
  );
}
