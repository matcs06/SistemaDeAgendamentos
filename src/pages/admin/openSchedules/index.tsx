import SideBar from "../../../components/SideBar"
import styles from "./openSchedules.module.scss"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fontSize } from "@mui/system";
export default function OpenSchedules(){

   const handleDelete = () =>{
      window.alert("Botão deletar")
   }

   return(
      <div className={styles.container}>
         <SideBar/>         
         <div className={styles.panel}>
            
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={handleDelete}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            <div className={styles.card}>
               <div>
                  <p>Cliente: Ana Kele</p>
                  <p>Serviço: Depilação</p>
                  <div className={styles.numberContainer}>
                     <p>Número: 11959842539</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: 11hrs</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: 3hrs</p>
                     <p>15 R$</p>
                  </div>
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