import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <p>
        <Link href="/">Home!</Link>
      </p>
      <p>
        <Link href="/about">About!</Link>
      </p>
    </>
  );
}
