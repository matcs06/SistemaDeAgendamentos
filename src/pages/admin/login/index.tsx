import styles from "./login.module.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Input from "../../../components/input"
import Button from "../../../components/Button"
import { useState } from "react";
import api from "../../../api";

export default function Login(){
   
   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
   
   const handleClick = async () =>{
      try {
         const response = await api.post("https://agendaapi.arangal.com/sessions/", {
         username: user,
         password: password,
         });

         localStorage.setItem("token", response.data.token);

         window.location.pathname = ("/admin/servicesList")
      } catch (error) {
         console.log(error)
         window.alert("Erro ao realiza login, Tente novamente!!!");
      }
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
          <Input type="text" placeholder="Usuário" name="user" setFieldValue={setUser} />
          <Input type="password" placeholder="Senha" name="password" setFieldValue={setPassword}/>
          <Button page="/admin/login" handleClick={handleClick} >Entrar</Button>
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