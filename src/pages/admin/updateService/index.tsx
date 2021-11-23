import { useState } from "react"
import styles from "./updateService.module.scss"
import SideBar from "../../../components/SideBar"
import Input from "../../../components/input"
import Button from "../../../components/Button";
import { withRouter } from 'next/router'

function UpdateService(props: any) {

   const [serviceName, setServiceName] = useState()
   const [serviceInfo, setServiceInfo] = useState()
   const [value, setValue] = useState()
   const [duration, setDuration] = useState()
  
   const handleCreate = ()=>{

   }

   const handleBack = ()=>{
      window.location.pathname = "/admin/servicesList"
   }
  
   return(
      <div className={styles.container}>
          <SideBar/>
          <div className={styles.panelContainer}>
          <div className={styles.panel}>
            <div className={styles.serviceName}>
                 <Input type="text" placeholder={props.router.query.serviceName} name="Servico" setFieldValue={setServiceName}/>
             </div>
             <div className={styles.serviceDescription}>
                 <Input type="text" placeholder="Descrição do serviço" name="Descricao" setFieldValue={setServiceInfo}/>
             </div>
             <div className={styles.valueAndDuration}>
                <Input type="text" placeholder="Valor" name="Valor" setFieldValue={setValue}/>
                <Input disabled="disabled" type="time" placeholder="Duração" name="Duração" setFieldValue={setDuration}/>
             </div>
             <div className={styles.buttonContainer}>
                <Button page="/admin/createAvailability" handleClick={handleCreate} >Atualizar</Button>
                <Button page="login" handleClick={handleBack} >Voltar</Button>
             </div>
              
         </div>       
         </div>
      </div>
   )
}

export default withRouter(UpdateService)