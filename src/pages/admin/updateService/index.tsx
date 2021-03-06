import { useState } from "react"
import styles from "./updateService.module.scss"
import SideBar from "../../../components/SideBar"
import Input from "../../../components/input"
import Button from "../../../components/Button";
import { withRouter } from 'next/router'
import api from "../../../api";

function UpdateService(props: any) {

   const [serviceName, setServiceName] = useState()
   const [serviceInfo, setServiceInfo] = useState()
   const [value, setValue] = useState()
   const [duration, setDuration] = useState()
  
   const handleUpdate = async ()=>{
      const token = localStorage.getItem("token");
      var existentServiceName = ''
      var existentDuration = ''
      var existentDescription = ''
      var existentValue = ''
      
      if(!serviceName){
         existentServiceName = props.router.query.serviceName;
      }else{
         existentServiceName = serviceName
      }

      if(!duration){
         existentDuration = props.router.query.serviceDuration;
      }else{
         existentDuration = duration
      }

      if(!serviceInfo){
         existentDescription = props.router.query.serviceDescription;
      }else{
         existentDescription = serviceInfo
      }

      if(!value){
         existentValue = props.router.query.serviceValue;
      }else{
         existentValue = value
      }

      try {
         await api.patch(
         `/products/${props.router.query.serviceId}`,
         {
            name: existentServiceName,
            description: serviceInfo,
            price: value,
            duration: existentDuration
         },
         {
            headers: {
               Authorization: "Bearer " + token,
            },
         }
         );

         window.alert(
         `Serviço atualizado com sucesso`
         );
         window.location.pathname = ("/admin/servicesList")
      } catch (error) {
         window.alert("erro ao adicionar produtos: " + String(error));
      }

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
                <Button page="/admin/updateService" handleClick={handleUpdate} >Atualizar</Button>
                <Button page="/admin/servicesList" handleClick={handleBack} >Voltar</Button>
             </div>
              
         </div>       
         </div>
      </div>
   )
}

export default withRouter(UpdateService)