'use server';

import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import validateEmail from '@/helpers/validateEmail';
import validatePassword from '@/helpers/validatePassword';

export async function Signup(
   currentState: any,
   formData: FormData
): Promise<string> {
   const email = formData.get('email') as string;
   const password = formData.get('password') as string;

   // Validazione email e password
   if (!validateEmail(email) || !validatePassword(password)) {
      return 'Invalid email or password';
   }

   // Hash della password
   const hash = bcrypt.hashSync(password, 8);

   // Creazione dell'utente nel database
   try {
      await prisma.user.create({
         data: {
            email,
            password: hash,
         },
      });
   } catch (error) {
      // Gestione dell'errore, ad esempio se l'email è già in uso
      return 'User already exists or another error occurred';
   }

   // Reindirizzamento dopo la registrazione
   redirect('/login');
}
