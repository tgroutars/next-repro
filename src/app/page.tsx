'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      HOME
      <Link href="/bar">BAR</Link>
      <Link href="/foo">FOO</Link>
    </div>
  );
}
