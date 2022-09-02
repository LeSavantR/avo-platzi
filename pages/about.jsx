import Footer from '../components/Footer';
import Heads from '../components/Heads';
import Navbar from '../components/Navbar';
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
