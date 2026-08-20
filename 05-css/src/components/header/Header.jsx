import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <h2>Adarsh</h2>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header