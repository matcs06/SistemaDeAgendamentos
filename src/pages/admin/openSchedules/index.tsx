import SideBar from "../../../components/SideBar"
import styles from "./openSchedules.module.scss"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fontSize } from "@mui/system";
import { useEffect, useState } from "react";
import api from "../../../api";
import { getWeekDayName, timeFormated } from "./utils";

interface SchduleFields{
   id:string;
   customer_name:string;
   service:string;
   date:string;
   start_time:string;
   service_duration:string;
   phone_number:string;
   value: string;
}

export default function OpenSchedules(){

   const [items, setItems] = useState<SchduleFields[]>([]);
   const [updateOnDelete, setUpdateOnDelete] = useState(false)


   useEffect(()=>{
      async function loadItems(){
         const response = await api.get<SchduleFields[]>("schedules/")

         setItems(response.data)
         setUpdateOnDelete(false)

      }
      loadItems();

      return()=>{
         setItems([]);
      }

   },[updateOnDelete])

   const deleteSchedules = async (productId: string) => {
     try {
       const token = localStorage.getItem("token");
       await api.delete(`/schedules/${productId}`,{
           headers: { Authorization: "Bearer " + token },
       })
       setUpdateOnDelete(true)
     } catch (error) {
       window.alert("Erro ao deletar agendamento")
     }
   }

   return(
      <div className={styles.container}>
         <SideBar/>         
         <div className={styles.panel}>
            {items.map((item)=>(
               <div className={styles.card} key={item.id}>
               <div>
                  <p>Cliente: {item.customer_name}</p>
                  <p>Serviço: {item.service}</p>
                  <p>Data: {item.date} - {getWeekDayName(item.date)}</p>
                  <div className={styles.numberContainer}>
                     <p>Número: {item.phone_number}</p>
                     <div className={styles.wppIcon} onClick={()=>{window.alert("clicou")}}>
                        <WhatsAppIcon/>   
                     </div>
                     
                  </div>
                  <p>Horário: {timeFormated(item.start_time)}</p>
                  <div className={styles.cardBottom}>
                     <p>Duração: {timeFormated(item.service_duration)}</p>
                     <p>{item.value} R$</p>
                  </div>
               </div>
             
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={()=>deleteSchedules(item.id)}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>               
            </div>
            ))}
            

         </div>
         
      </div>
      
   )


}