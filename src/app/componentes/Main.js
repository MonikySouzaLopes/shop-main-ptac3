'use client'
import { useEffect, useState } from "react";
import Image from "next/image"
import styles from "./main.module.css"

export default function Main(){

    const [listProduct, setListProduct] = useState([]);

    useEffect( ()=> {
      const getProduct = async() =>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setListProduct(data);
      };
      getProduct();
    }, []);

    const orderAz = () =>{
      const newList = [...listProduct].sort( (a, b) =>
          a.title.localeCompare(b.title)
      );
      setListProduct(newList);
    }
    const orderZa = () =>{
      let newList = [...listProduct].sort( (a, b) =>
          a.title.localeCompare(b.title)
      );
      newList = newList.reverse();
      setListProduct(newList);
    }
    const orderPrice = () =>{
      let newList = [...listProduct].sort( (a, b) =>
          a.price - b.price
      );
      setListProduct(newList);
    }
    const orderPriceReverse = () =>{
      let newList = [...listProduct].sort( (a, b) =>
          a.price - b.price
      );
      newList = newList.reverse();
      setListProduct(newList);
    }



      return (
        <>
        <div>
          <button onClick={orderAz}>AZ</button>
          <button onClick={orderZa}>ZA</button>
          <button onClick={orderPrice}>Menor preço para o maior</button>
          <button onClick={orderPriceReverse}>Maior preço para o menor</button>
        </div>

        <main className={styles.main}>
          {listProduct.map((products)=> 
          
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
        </>
      );
}