import SideBar from "../../../components/SideBar"
import styles from "./ServiceList.module.scss"

export default function ServicesList(){
   return(
      <div className={styles.container}>
         <SideBar/>
         <div className={styles.panel}>
            <h1>Lista de Serviços</h1>
         </div>
         
      </div>
      
   )


}