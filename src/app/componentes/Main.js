/*É usado o 'use client' para indicar que o componente deve ser 
renderizado no lado cliente(navegador) em vez de no servidor*/
'use client'

//importação do useEffect e useState do react
import { useEffect, useState } from "react";

//importação do componente Link do next
import Link from 'next/link'

//importação do componente Spinner que criamos 
import Spinner from "./Spinner";

//importação do componente Image do next
import Image from "next/image"

//importação do styles para estilização do componente Main.js
import styles from "./main.module.css"

/*importação do componente ErrorGetData que criamos
para que quando a API caisse, esse componente seja 
renderizado para informar ao usuario que ocorreu um erro */
import ErrorGetData from "./ErrorGetData";

/*Inicialização do conponente Main */
export default function Main(){

    //lista dos produtos a ser filtrada e ordenada
    const [listProduct, setListProduct] = useState([]);

    //lista completa com todos os produtos
    const [listComplete, setListComplete] = useState([]);

    //const usada para a busca 
    const [search, setSearch] = useState("");

    //const que guarda um valor boolean para ser usada depois para tratar o erro do servidor
    const [errorFetch, setErrorFetch] = useState(false);


    /*No código fornecido, o useEffect está sendo usado para buscar dados da 
    API https://fakestoreapi.com/products quando o componente é montado 
    (ou seja, quando o componente é inserido no DOM pela primeira vez) */
    useEffect( ()=> {
      //função assíncrona para buscar os dados no servidor(quando a função é assíncrona é utilizada no lado servidor)
      const getProduct = async() =>{
        //fetch é a função que busca os dados no servidor
        try{const response = await fetch("https://fakestoreapi.com/products");
          //os dados estão sendo convertidos para JSON
          const data = await response.json();
          
          //os dados obtidos estão sendo armazenados nas duas listas
          setListProduct(data);
          setListComplete(data);

          /*se ocorrer algum erro na execução da função, 
          o bloco catch é executado e o estdo de ErrorFetch é definido como true 
          para que seja exibida uma mensagem ao usuario*/
        }catch{
            setErrorFetch(true);
        }
      };
      getProduct();
    }, []);

    //função para ordenar os produtos em ordem alfabética
    const orderAz = () =>{

      //essa const ta fazendo uma cópia da lista de produtos, e ela ta usando usando o metódo sort para ordenar
      const newList = [...listProduct].sort( (a, b) =>
        //localeCompare é um método de string que compara duas strings em ordem alfabética, de acordo com as regras de localização.  
        a.title.localeCompare(b.title)
      );
      //depois o estado de listProduct vai ser alterado, afim de receber o que está armazenado dentro de newList
      setListProduct(newList);
    }

    //função vai ordenar os produtos em ordem alfabética só que ao contrario  
    const orderZa = () =>{
      let newList = [...listProduct].sort( (a, b) =>
          a.title.localeCompare(b.title)
      );
      newList = newList.reverse();
      setListProduct(newList);
    }

    //função para ordenar os preços dos produtos do menor pro maior 
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

    const searchText = (text) =>{
      setSearch(text);
      if(text.trim() == ""){
          setListProduct(listComplete);
          return
      }
      const newList = listProduct.filter((product) => 
        product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
       setListProduct(newList);
    }

    if(errorFetch == true){
      return <ErrorGetData/>
    }

    if(listComplete[0] == null){
      return <center><Spinner/></center>
    }

      return (
        <>
        <div>
          <input type="text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText( event.target.value)}/>
          <button onClick={orderAz}>AZ</button>
          <button onClick={orderZa}>ZA</button>
          <button onClick={orderPrice}>Menor preço para o maior</button>
          <button onClick={orderPriceReverse}>Maior preço para o menor</button>
        </div>

        <main className={styles.main}>
          {listProduct.map((products)=> 
          
                <div className={styles.card} key={products.id}>
                  <center><h3>{products.title}</h3></center>
                  <p><strong>R$ {products.price}</strong></p>
                  <center><p><strong>Descrição: </strong>{products.description}</p></center>
                  <center><p><strong>Categoria: </strong>{products.category}</p></center>
                  <p><strong>Contagem: </strong>{products.rating.count}</p>
                  <Image 
              width= {150}
              height={150}
              src={products.image}/>
              <br/>
              <Link href={"/product/" + products.id}>Ver mais!</Link>
                </div>
         )}
        </main>
        </>
      );
}