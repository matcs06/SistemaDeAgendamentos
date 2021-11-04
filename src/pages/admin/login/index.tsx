import styles from "./login.module.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Input from "../../../components/input"
import Button from "../../../components/Button"
import { useState } from "react";

export default function Login(){
   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   console.log(email, password);

   const handleClick = () =>{
      console.log("Abriu funnção")
   }

   return(
      <>
        <Head>
        <title>Login | Antonielem studio</title>
        </Head>
       <div className={styles.imageContainer}>
          <Image
             className={styles.logo}
             src="/logologin.png"
             width={411}
             height={392}
             alt="logo-login"
          />
       </div>
       <div className={styles.cardContainer}>
          <div className={styles.loginCard}>
          <h1>Fazer Login</h1>
          <Input type="text" placeholder="Email" name="email" setFieldValue={setEmail} />
          <Input type="password" placeholder="Senha" name="password" setFieldValue={setPassword}/>
          <Button page="https://www.google.com/" handleClick={handleClick} >Entrar</Button>
          <div className={styles.spamContainer}>
             <Link href="signin">
                 <span>Ainda não tenho uma conta</span>
             </Link>
          </div>
       </div>
       </div>
      
      </>
   )
}