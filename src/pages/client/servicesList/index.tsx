import styles from "./servicesList.module.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fontSize } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import ChooseTime from "../chooseTime";

export default function ServicesList(){

    const test = "asdasd"

   const handleClick = (serviceName) =>{
      window.alert("clicked")
      return(
          <ChooseTime serviceName={serviceName}/>
      )
   }

   return(
      <div className={styles.container}>
        <h3 className={styles.screenTitle}>Escolha um serviço</h3>
         <div className={styles.panel}>
            
            <div className={styles.card} onClick={(test)=>handleClick(test)}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
               </div>
              
               <ul>
                  <li>
                     Higienização
                  </li>
                  <li>
                     Esfoliação
                  </li>
                  <li>
                     Mapeamento
                  </li>
                  <li>
                     Corte e pinçamento
                  </li>
                  <li>
                     Aplicação com gilete
                  </li>
               </ul>
               <div className={styles.cardBottom}>
                  <h3>Duração: 3hrs</h3>
                  <h3>15 R$</h3>
               </div>
            </div>

         </div>
         
      </div>
      
   )


}