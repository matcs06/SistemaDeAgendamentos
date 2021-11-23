import SideBar from "../../../components/SideBar"
import styles from "./serviceList.module.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Router from 'next/router'

export default function ServicesList(){

   const handleDelete = () =>{
      window.alert("Botão deletar")
   }

   const handleEdit = (serviceName: string) =>{

      Router.push({
         pathname: '/admin/updateService',
         query: { serviceName: serviceName }
     })
   }

   return(
      <div className={styles.container}>
         <SideBar/>         
         <div className={styles.panel}>
            
            <div className={styles.card}>
               <div className={styles.topCardContainer}>
                   <h1>Design Natural</h1>
                   <div className={styles.editContainer} onClick={()=>handleEdit("design natural")}>
                      <EditIcon sx={{fontSize:30}}/>
                   </div>
                   <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>

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