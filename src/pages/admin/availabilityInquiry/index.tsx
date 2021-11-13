import SideBar from "../../../components/SideBar"
import styles from "./availabilityInquiry.module.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fontSize } from "@mui/system";

export default function AvailabilityInquiry(){

   const handleDelete = () =>{
      window.alert("Botão deletar")
   }

   return(
      <div className={styles.container}>
         <SideBar/>         
         <div className={styles.panel}>
            
            <div className={styles.card}>
               <p>Dia da semana: Segunda</p>
               <p>Data: 15 de novembro</p>
               <p>Ano: 2021</p>
               <div className={styles.cardBottom}>
                  <h4>Manhã: 08 hrs - 11 hrs</h4>
                  <h4>Tarde: 13 hrs - 16 hrs</h4>
               </div>
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>
               
            </div>
            
            

         </div>
         
      </div>
      
   )


}