import styles from "./footer.module.css";
import Image from "next/image"
export default function Footer(){
    return(
          <footer className={styles.rodape}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Aproveite nossos produtos de qualidade!!</h1>
            <ul>
              <h3>Nossas redes sociais:</h3>
              <li className={styles.lista}>
                <Image 
                      width={40} 
                      height={40} 
                      src="http://pluspng.com/img-png/instagram-icon-png-instagram-icon-1600.png"/>
              </li>
              <li ><Image 
                      width={45} 
                      height={45} 
                      src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente.png?fit=1600%2C1600&ssl=1"/>
              </li>
              <li className={styles.lista}>
                  <Image 
                      width={50} 
                      height={50} 
                      src="https://www.iconninja.com/files/424/88/63/facebook-black-icon.png"/>
              </li>
              <li className={styles.lista}>
                  <Image 
                      width={45} 
                      height={45} 
                      src="https://th.bing.com/th/id/R.ebde6db9f4a2fc50afd71b417459eced?rik=NMOuQOOGogtGUw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftelegram-logo-png-open-2000.png&ehk=7fx6AXa8wrDf%2bOaPJ73oukUYX0C1NdQXecUm1kSenBg%3d&risl=&pid=ImgRaw&r=0"/>
              </li>
            </ul>
            <p>Data de criação: 10/11/2007</p>
            <Image 
              className={styles.logo}
              width= {100}
              height={100} 
              src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-shopping-bag-png-image_9063007.png"/>
          </footer>
    );
};