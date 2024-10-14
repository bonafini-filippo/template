import { Logout } from '@/actions/auth/logout';
import Link from 'next/link';

export default function AdminPage() {
   return (
      <div>
         <h1>Sei nella zona admin</h1>
         <Link href='/'>Torna alla home</Link>
         <form action={Logout}>
            <button>Esci</button>
         </form>
      </div>
   );
}
