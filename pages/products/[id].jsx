import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';

export default function ProductItem() {
  const { query: { id } } = useRouter();
  return (
    <>
      <Heads title="Products" />
      <main>
        <Navbar />
        <h1>Pagina del producto: {id}</h1>
      </main>
      <Footer />
    </>
  );
}
