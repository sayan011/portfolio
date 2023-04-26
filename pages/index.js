
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="grid h-screen place-items-center">wOrK iN pRogrEsS</div>
      
      <Image src="/cat.jpg" alt="cattt" width={90} height={22} />
     
    </div>
  );
}
