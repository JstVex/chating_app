import styles from '../styles/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80" className={styles.image} alt="" />
            <p>Loading...</p>
        </div>
    );
}

export default Loading;