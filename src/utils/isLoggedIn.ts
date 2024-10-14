import { cookies } from 'next/headers';

export const isLoggedIn = () => {
   const authCookie = cookies().get('Authorization');
   return !!authCookie;
};
