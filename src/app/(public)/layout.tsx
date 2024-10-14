import Header from '@/components/public/header';

export default function PublicLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <Header />
         {children}
      </>
   );
}
