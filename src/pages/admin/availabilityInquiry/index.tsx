import SideBar from "../../../components/SideBar"
import styles from "./availabilityInquiry.module.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fontSize } from "@mui/system";
import { useEffect, useState } from "react";
import {getMonthName,getWeekDayName,getYear, getDayInNumber, timeFormated} from "../../../utils/index.js"
import api from "../../../api";

interface AvailabilityFiels{
   id:string;
   date:string;
   morning_start_time:string;
   morning_end_time:string;
   afternoon_start_time:string;
   afternoon_end_time:string;
}

export default function AvailabilityInquiry(){
   const [items, setItems] = useState<AvailabilityFiels[]>([]);
   const [updateOnDelete, setUpdateOnDelete] = useState(false)


   useEffect(()=>{
      async function loadItems(){
         const response = await api.get<AvailabilityFiels[]>("/availability")

         setItems(response.data)
         setUpdateOnDelete(false)

      }
      loadItems();

      return()=>{
         setItems([]);
      }

   },[updateOnDelete])

   const deleteAvailability = async (productId: string) => {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/availability/${productId}`,{
          headers: { Authorization: "Bearer " + token },
      })
      setUpdateOnDelete(true)
    } catch (error) {
      window.alert("Erro ao deletar serviço")
    }
  }

   return(
      <div className={styles.container}>
         <SideBar/>         
         <div className={styles.panel}>
            {items.map((item)=>(
            <div className={styles.card} key={item.date} >
               <p>Dia da semana: {getWeekDayName(item.date)}</p>
               <p>Data: {getDayInNumber(item.date)} de {getMonthName(item.date)}</p>
               <p>Ano: {getYear(item.date)}</p>
               <div className={styles.cardBottom}>
                 {item.morning_start_time && (
                    <p>Manhã: {timeFormated(item.morning_start_time)} hrs - {timeFormated(item.morning_end_time)} hrs</p>
                 )} 
                 {item.afternoon_start_time && (
                    <p>Tarde: {timeFormated(item.afternoon_start_time)} hrs - {timeFormated(item.afternoon_end_time)} hrs</p>
                 )}
               </div>
               <div className={styles.deleteContainerContainer}>
                  <div className={styles.deleteContainer} onClick={()=>{deleteAvailability(item.id)}}>
                    <DeleteForeverIcon sx={{fontSize:30}}/>
                  </div>
               </div>       
            </div>
            ))}
            
         </div>
         
      </div>
      
   )


}