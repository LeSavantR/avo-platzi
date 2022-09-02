/* eslint-disable import/no-unresolved */
import Heads from '@c/Heads';
import Footer from '@c/Footer';
import Navbar from '@c/Navbar';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <>
      <Heads title="About" />
      <main className={styles.main}>
        <Navbar />
        <h1>About Page!</h1>
        <Footer />
      </main>
    </>
  );
}
