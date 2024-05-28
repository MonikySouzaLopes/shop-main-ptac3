import styles from "./header.module.css"
export default function Header(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar_brand}>Shop Main</div>
        <ul className={styles.navbar_menu}>
            <li className={styles.navbar_item}><a href="#home">Início</a></li>
            <li className={styles.navbar_item}><a href="#about">Sobre</a></li>
            <li className={styles.navbar_item}><a href="#services">Serviços</a></li>
            <li className={styles.navbar_item}><a href="#contact">Contato</a></li>
        </ul>
    </nav>
    );
};