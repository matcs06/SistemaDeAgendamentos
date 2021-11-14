import { useState } from "react"
import styles from "./createAvailability.module.scss"
import SideBar from "../../../components/SideBar"
import Input from "../../../components/input"
import Button from "../../../components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from  "react-datepicker";
import pt from "date-fns/locale/pt-BR"

export default function CreateAvailability() {

   const [picketDate, setPickedDate] = useState(new Date())
   const [morningFrom, setMorningFrom] = useState()
   const [morningTo, setMorningTo] = useState()
   const [afternoonFrom, setAfternoonFrom] = useState()
   const [afternoonTo, setAfternoonTo] = useState()

   registerLocale('pt', pt)

   const handlePickedDate = (date) =>{
      setPickedDate(date)
   }
  
   return(
      <div className={styles.container}>
          <SideBar/>
          <div className={styles.panelContainer}>
          <div className={styles.panel}>
             <DatePicker locale="pt" selected={picketDate} onChange={(date)=>{handlePickedDate(date)}} />
             <h3>Manhã</h3>
             <div className={styles.morningAfternoon}>
                <Input type="time" placeholder="das" name="fromM" setFieldValue={setMorningFrom}/>
                <Input type="time" placeholder="as" name="toM" setFieldValue={setMorningTo}/>
             </div>
             <h3>Tarde</h3>
             <div className={styles.morningAfternoon}>
                <Input type="time" placeholder="das" name="fromA" setFieldValue={setAfternoonFrom}/>
                <Input type="time" placeholder="as" name="toA" setFieldValue={setAfternoonTo}/>
             </div>
             <div className={styles.buttonContainer}>
                <Button page="login" handleClick={()=>{}} >Criar</Button>
                <Button page="login" handleClick={()=>{}} >Voltar</Button>
             </div>
              
         </div>       
         </div>
      </div>
   )
}
