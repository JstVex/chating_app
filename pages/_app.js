import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from './login';
import Loading from './loading'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (user) {

  //   }
  // })

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Login />
  }

  return <Component {...pageProps} />
}

export default MyApp
