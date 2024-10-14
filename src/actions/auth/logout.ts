'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function Logout() {
   // Rimuove il cookie 'Authorization'
   cookies().set('Authorization', '', {
      expires: new Date(0), // Imposta una data di scadenza nel passato per rimuovere il cookie
      path: '/', // Assicurati che il path sia corretto
   });

   // Reindirizza l'utente alla home o pagina di login
   redirect('/'); // O '/' se vuoi reindirizzare alla home page
}
