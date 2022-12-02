import styles from '../styles/Login.module.css'
import { BsChatDots } from 'react-icons/bs';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase"

const login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <BsChatDots />
                <button onClick={() => signInWithGoogle()}>sign in with google</button>
            </div>
        </div>
    );
}

export default login;