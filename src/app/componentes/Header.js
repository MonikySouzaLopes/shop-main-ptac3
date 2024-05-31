import styles from "./header.module.css"
import Image from "next/image";
export default function Header(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar_div}> 
        <Image width= {100}
              height={100} 
              src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-shopping-bag-png-image_9063007.png"/>
        <p>Shop Main</p>
        <p className={styles.frase}>Seu guarda-roupa que lute para liberar espaço ;)</p>
        </div>
        <div className={styles.navbar_menu}>
           <Image 
           className={styles.navbar_item}
           width= {40}
           height={40}
           src="https://img.icons8.com/ios/50/shopping-cart--v1.png" 
            />
            <button type="button" className={styles.button}>Novo Produto</button>
        </div>
    </nav>
    );
};