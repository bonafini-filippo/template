'use client';
import { Login } from '@/actions/auth/login';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function LoginForm() {
   const [error, formAction] = useFormState(Login, undefined);
   return (
      <>
         <form
            action={formAction}
            className='flex flex-col justify-center items-center py-10 gap-4 bg-zinc-200'
         >
            <div>
               <label htmlFor='email'>Email</label>
               <input className='block' type='email' name='email' />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input className='block' type='password' name='password' />
            </div>
            <div>
               <button className='bg-zinc-50 py-2 px-10 w-full' type='submit'>
                  Login
               </button>
            </div>
            {error && <p>{error}</p>}
            <Link href='/signup'>Non hai un account? Registrati</Link>
            <Link href='/'>Torna alla home</Link>
         </form>
      </>
   );
}
