import Header from "./componentes/Header";
import styles from "./not-found.module.css";
//essa função será retornada quando o usuário acessar uma rota que não existe
export default function NotFound(){
    return (
        <html>
      <body >
        <Header/>
      <div><h1 className={styles.erro}>Error - Página não encontrada!</h1></div> 
      </body>
    </html>
       
    
    );
}