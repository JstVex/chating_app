import { RxAvatar } from "react-icons/rx";
import { MdCloseFullscreen, MdLogout } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Sidebar.module.css';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = () => {
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
            <button className={styles.newchat}>start a new chat</button>

        </div>
    );
}

export default Sidebar;