import styles from "./footer.module.css";
import Image from "next/image"
export default function Footer(){
    return(
          <footer className={styles.rodape}>
            <h1>Aproveite nossos produtos de qualidade!!</h1>&nbsp;&nbsp;&nbsp;
            <Image width={30} height={30} src="http://pluspng.com/img-png/instagram-icon-png-instagram-icon-1600.png"/>
            <Image width={35} height={35} src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente.png?fit=1600%2C1600&ssl=1"/>
            <Image width={30} height={30} src="http://cdn.onlinewebfonts.com/svg/img_401526.png"/>
          </footer>
    );
};