import Link from "next/link";
import servicesStyle from"./services.module.css";
export default function Contact(){
    return(<main>
    <h1 className={servicesStyle.h1}>My Services are as Under:</h1>
   <li> <Link href="/web">Website Development</Link>
   </li>
   <li>
    <Link href="/App-Dev">Application Development</Link>  
    </li>
    </main>
)}