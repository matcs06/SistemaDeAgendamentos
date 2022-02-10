import Router, { withRouter } from "next/router"
import { useEffect, useState } from "react"
import api from "../../../api"
import Input from "../../../components/input"
import styles from "./customerInfo.module.scss"

function CustomerInfo(props:any){

    const [customerName, setCustomerName] = useState("")
    const [customerNumber, setCustomerNumber] = useState("")

    const handleClick = async()=>{
        const serviceDuration = props.router.query.serviceDuration;
        const choosedDate = props.router.query.choosedDate;
        const choosedTime = props.router.query.choosedTime;
        const isMorning = props.router.query.isMorning;
        const serviceName = props.router.query.serviceName;
        try {
            await api.post('schedules',{
                customer_name: customerName,
                service: serviceName,
                date: choosedDate,
                start_time: choosedTime,
                service_duration: serviceDuration,
                phone_number: customerNumber,
                isMorning: Boolean(isMorning)
            })

            Router.push({
                pathname: '/client/finalScreen',
                query:{valor:props.router.query.servicePrice, serviceName, serviceTime: choosedTime, customerName }
            })

        } catch (error) {
            window.alert("Erro ao criar agendamento, tente novamente ou veja se já não tem um agendamento feito para esse horário!")
            
        }
      
    }

    return(
       <div className={styles.container}>
           <div>
               <h2 className={styles.screenTitle}>Informações</h2>
           </div>
           <div className={styles.inputContainer}>
               <Input type="text" placeholder="Nome Completo"  name="name" setFieldValue={setCustomerName} autocomplete="off" />
               <Input type="text" placeholder="Número de telegone (WhatsApp)"  name="number" autocomplete="off" setFieldValue={setCustomerNumber} />
               <span>Insira o DD antes do número, Ex: 98991443355</span>
           </div>

           <div>
               <h2  className={styles.payment}>Pagamento é feito no momento do serviço</h2>
               <h2  className={styles.value}>Valor: {props.router.query.servicePrice} R$ </h2>
           </div>

           <div className={styles.buttonContainer} onClick={handleClick}>
                <button>Agendar</button>
            </div>
       </div>    
    )


}

export default withRouter(CustomerInfo);