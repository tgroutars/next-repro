'use client';

interface Props {
  children: React.ReactNode;
  aside: React.ReactNode;
}

export default function FooLayout({ children, aside }: Props) {
  return (
    <div className="wrapper">
      {children}
      {aside}
    </div>
  );
}
