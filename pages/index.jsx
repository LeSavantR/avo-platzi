import Footer from '../components/Footer';
import Heads from '../components/Heads';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Heads />
      <main className={styles.main}>
        <Navbar />
        <h1>Hola Platzi!!!</h1>
        <Footer />
      </main>
    </>
  );
}
