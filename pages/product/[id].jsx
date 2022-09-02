import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';

export default function ProductItem() {
  const { query: { id } } = useRouter();

  const [ product, setProduct ] = useState({});

  useEffect(() => {
    if(id !== ''){
      const getAvo = async () => {
        const request = await fetch(`/api/avo/${id}`);
        const data = await request.json();
        setProduct(data);
      }

      getAvo();
    }
  }, [id])

  return (
    <>
      <Heads title="Platzi Avo | Product" />
      <main>
        <Navbar />
        <h1>Pagina del producto</h1>
        <div>
          <p>{product?.name}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
