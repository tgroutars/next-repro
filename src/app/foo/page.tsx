'use client';

import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="container">
      FOO PAGE
      <Link href="/bar">BAR</Link>
    </div>
  );
}
