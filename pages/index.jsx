import React, { useEffect, useState } from 'react';
import Footer from '@c/Footer';
import Heads from '@c/Heads';
import Navbar from '@c/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [ product, setProduct ] = useState([]);
  const [ length, setLength ] = useState('');

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch('api/avo');
      const { data, length } = await response.json();
      setProduct(data);
      setLength(length);
    };

    fetching();
    // window
    //   .fetch('api/avo')
    //   .then(res => res.json())
    //   .then(({ data, length }) => {
    //     setProduct(data);
    //     setLength(length);
    //   })
  })

  return (
    <>
      <Heads />
      <main className={styles.main}>
        <Navbar />
        <h1>Hola Platzi!!! {length}</h1>
        {product.map((prod) => (
          <div key={prod.id}>
            <p>{prod.name}</p>
          </div>
        ))}
        <Footer />
      </main>
    </>
  );
}
