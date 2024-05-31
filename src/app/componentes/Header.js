import styles from "./header.module.css"
export default function Header(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar_brand}> <img className={styles.img} src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-shopping-bag-png-image_9063007.png"></img>
        Shop Main
        <p className={styles.frase}>Seu guarda-roupa que lute para liberar espaço ;)</p>
        </div>
        <div className={styles.navbar_menu}>
            <p className={styles.navbar_item}><a href="#home"><img src="https://img.icons8.com/ios/50/shopping-cart--v1.png"></img></a></p>
            <button type="button" className={styles.button}>Novo Produto</button>
        </div>
    </nav>
    );
};