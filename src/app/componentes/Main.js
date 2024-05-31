import Image from "next/image"
import styles from "./main.module.css"
export default async function Main(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    
      return (
        <main className={styles.main}>
          {data.map((products)=> 
          
                <div className={styles.card} key={products.id}>
                  <center><h3>{products.title}</h3></center>
                  <p><strong>R${products.price}</strong></p>
                  <center><p><strong>Descrição: </strong>{products.description}</p></center>
                  <center><p><strong>Categoria: </strong>{products.category}</p></center>
                  <p><strong>Contagem: </strong>{products.rating.count}</p>
                  <Image 
              width= {150}
              height={150}
              src={products.image}/>
              
                </div>
         
         )}
        </main>
      );
}