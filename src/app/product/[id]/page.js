//página da rota dinâmica
import Image from "next/image";
//a função recebe um parâmetro, que no caso será o id
export default async function Product({params}){
    //busca os dados na api de acordo com seu id
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
    //transforma os dados em json
    const data = await response.json();
    return(
        <div> 
        <p> {data.title}</p>
        <p>{data.price}</p>
        <p>{data.description}</p>
        <p>{data.category}</p>
        <p>{data.rating.count}</p>
        <Image 
              width= {150}
              height={150}
              src={data.image}/>

        </div>
        
    );
}