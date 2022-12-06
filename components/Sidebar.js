import { RxAvatar } from "react-icons/rx";
import { MdCloseFullscreen, MdLogout } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Sidebar.module.css';
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import * as EmailValidator from 'email-validator';
import { useAuthState } from "react-firebase-hooks/auth";
import {
    collection,
    addDoc
} from 'firebase/firestore';
import { use } from "react";

const Sidebar = () => {
    const [user] = useAuthState(auth);

    const newChat = () => {
        const input = prompt('enter the email address of the user u wish to chat with');

        if (!input) {
            return null
        }

        if (EmailValidator.validate(input) && input !== user.email) {
            const chatRef = addDoc(collection(db, 'chats'), {
                users: [user.email, input]
            })
        }


    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <RxAvatar className={styles.profile} />
                <div className="icons">
                    <MdLogout onClick={() => signOut(auth)} />
                    <MdCloseFullscreen className={styles.icon} />
                </div>
            </header>
            <div className={styles.search}>
                <AiOutlineSearch />
                <input
                    type="text"
                    placeholder="search in chats"
                />
            </div>
            <button className={styles.newchat} onClick={newChat}>start a new chat</button>

        </div>
    );
}

export default Sidebar;