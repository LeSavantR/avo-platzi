import Head from 'next/head';

export default function Heads({ title }) {
  const namePage = title || 'Platzi | Avo';
  return (
    <Head>
      <title>{namePage}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
