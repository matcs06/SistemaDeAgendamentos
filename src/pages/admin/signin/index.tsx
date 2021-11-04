import Head from 'next/head'
import Image from 'next/image'
import Input from "../../../components/input"
import Button from "../../../components/Button"

import styles from "./signin.module.scss"
import { useState } from 'react';

export default function SignIn(){
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [key, setKey] = useState("");
   
   console.log(email, password, name, key)

   const handleClick = () =>{
      console.log("Abriu funnção")
   }

   return(
       <>
        <Head>
        <title>Criar Usuário | Antonielem studio</title>
        </Head>
       <div className={styles.imageContainer}>
          <Image
             className={styles.logo}
             src="/logologin.png"
             width={301}
             height={274}
             alt="logo-login"
          />
       </div>
       <div className={styles.cardContainer}>
          <div className={styles.loginCard}>
          <h1>Criar Usuário</h1>
          <Input type="text" placeholder="Nome" name="name" setFieldValue={setName}/>
          <Input type="text" placeholder="Email" name="email" setFieldValue={setEmail}/>
          <Input type="password" placeholder="Senha" name="senha" setFieldValue={setPassword}/>
          <Input type="password" placeholder="Chave" name="key" setFieldValue={setKey}/>
          <Button page="https://www.google.com/" handleClick={handleClick} >Criar Usuário</Button>
          <Button page="login" handleClick={handleClick} >Voltar</Button>
          <div className={styles.space}></div>
       </div>
       </div>
      
      </>
   )
}