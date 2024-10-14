'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';

export async function Login(
   currentState: any,
   formData: FormData
): Promise<string> {
   const email = formData.get('email');
   const password = formData.get('password');

   // Trova l'utente in base all'email
   const user = await prisma.user.findFirst({
      where: {
         email: email as string,
      },
   });

   // Se l'utente non esiste, ritorna un errore
   if (!user) {
      return 'Invalid email';
   }

   // Confronta la password
   const isCorrectPassword = bcrypt.compareSync(
      password as string,
      user.password
   );
   if (!isCorrectPassword) {
      return 'Invalid password';
   }

   // Genera il JWT
   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
   const alg = 'HS256';

   const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg })
      .setExpirationTime('72h')
      .setSubject(user.id.toString())
      .sign(secret);

   // Imposta il cookie con il token JWT
   cookies().set('Authorization', jwt, {
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 3), // 3 giorni
      path: '/',
      sameSite: 'strict',
   });

   // Reindirizza l'utente alla pagina admin
   redirect('/admin');
}
