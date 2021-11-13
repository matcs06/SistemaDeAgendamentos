import styles from "./createAvailability.module.scss"
import SideBar from "../../../components/SideBar"
import Input from "../../../components/input"
import { useState } from "react"
import DatePicker from "react-datepicker";


export default function CreateAvailability() {

   const [picketDate, setPickedDate] = useState(new Date())

   return(
      <div className={styles.container}>
          <SideBar/>
          <div className={styles.panel}>
             

         </div>       
      </div>
   )
}
