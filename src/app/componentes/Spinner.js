import Image from "next/image"
export default function Spinner(){
    return(
        <Image 
        width={100}
        height={100}
        src="/90-ring.svg" 
        alt="Imagem carregando"/>
    );
}