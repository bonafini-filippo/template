import Link from 'next/link';
import { isLoggedIn } from '@/utils/isLoggedIn';

export default function Header() {
   return (
      <header className='bg-zinc-300'>
         <div className='container mx-auto flex justify-between items-center p-4'>
            <div>logo</div>
            <nav>
               <ul className='flex items-center gap-4'>
                  {isLoggedIn() ? (
                     <li>
                        <Link href='/admin'>Admin</Link>
                     </li>
                  ) : (
                     <>
                        <li>
                           <Link href='/login'>Accedi</Link>
                        </li>
                        <li>
                           <Link href='/signup'>Registrati</Link>
                        </li>
                     </>
                  )}
               </ul>
            </nav>
         </div>
      </header>
   );
}
