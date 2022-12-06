import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from './login';
import Loading from './loading'
import { useEffect } from 'react';
import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  const addUser = async () => {
    try {
      const docRef = await setDoc(doc(db, 'users', user.email), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoUrl: user.photoURL
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    if (user) {
      addUser()
    }
  }, [user])

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Login />
  }

  return <Component {...pageProps} />
}

export default MyApp
