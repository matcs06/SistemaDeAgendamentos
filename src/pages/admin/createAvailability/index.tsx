import { useState } from "react"
import styles from "./createAvailability.module.scss"
import SideBar from "../../../components/SideBar"
import Input from "../../../components/input"
import Button from "../../../components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { registerLocale } from  "react-datepicker";
import {validateMorningTime, validateAfternoonTime} from "./utils.js"
import pt from "date-fns/locale/pt-BR"



export default function CreateAvailability() {

   const [picketDate, setPickedDate] = useState(new Date())
   const [morningFrom, setMorningFrom] = useState()
   const [morningTo, setMorningTo] = useState()
   const [afternoonFrom, setAfternoonFrom] = useState()
   const [afternoonTo, setAfternoonTo] = useState()
   const [formatedDate, setFormatedDate] = useState("")

   registerLocale('pt', pt)
   
   const addZero = (value) => {
      
      if(value < 10 ){
         value = '0' + value;   
      }
      return value
   }

   const handlePickedDate = (date) =>{
      setPickedDate(date)

      var month = date.getUTCMonth() + 1; //months from 1-12
      var day = date.getUTCDate() - 1;
      var year = date.getUTCFullYear();

      day = addZero(day)
      month = addZero(month)

      const formatedDate = day + "/" + month + "/" + year
      setFormatedDate(formatedDate)

   }

   const handleCreate = ()=>{
      validateMorningTime(morningFrom, morningTo);
      validateAfternoonTime(afternoonFrom, afternoonTo)
      console.log(morningFrom, morningTo)
   }

   const handleBack = ()=>{
      window.location.pathname = "/admin/servicesList"
   }
  
   return(
      <div className={styles.container}>
          <SideBar/>
          <div className={styles.panelContainer}>
          <div className={styles.panel}>
             <DatePicker className={styles.datePicker} locale="pt" selected={picketDate} onChange={(date)=>{handlePickedDate(date)}} />
             <div className={styles.formatedDate}>{formatedDate}</div>
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
                <Button page="/admin/createAvailability" handleClick={handleCreate} >Criar</Button>
                <Button page="login" handleClick={handleBack} >Voltar</Button>
             </div>
              
         </div>       
         </div>
      </div>
   )
}
