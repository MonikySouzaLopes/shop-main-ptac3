import Image from "next/image";
export default async function Product({params}){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
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