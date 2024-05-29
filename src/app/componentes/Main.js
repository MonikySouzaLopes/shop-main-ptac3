import Image from "next/image"
import styles from "./main.module.css"
export default async function Main(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    
      return (
        <main className={styles.main}>
          {data.map((products)=> 
          
                <div className={styles.card} key={products.id}>
                  <center><h2>{products.title}</h2></center>
                  <p>R${products.price}</p>
                  <center><p>{products.description}</p></center>
                  <center><p>{products.category.name}</p></center>
                  <Image 
              width= {200}
              height={200}
              src={products.image}/>
              <p>{products.rating.count}</p>
                </div>
         
         )}
        </main>
      );
}