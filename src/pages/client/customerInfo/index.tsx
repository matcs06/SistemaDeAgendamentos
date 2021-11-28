import Router, { withRouter } from "next/router"
import { useState } from "react"
import Input from "../../../components/input"
import styles from "./customerInfo.module.scss"

function CustomerInfo(props:any){

    const [customerName, setCustomerName] = useState("")
    const [customerNumber, setCustomerNumber] = useState("")

    const handleClick = ()=>{
        console.log("Continuar")
        Router.push({
            pathname: '/client/finalScreen',
            query:{valor: 15, serviceName: "Design natural", serviceTime: "11:00"}
        })
    }

    return(
       <div className={styles.container}>
           <div>
               <h2 className={styles.screenTitle}>Informações</h2>
           </div>
           <div className={styles.inputContainer}>
               <Input type="text" placeholder="Nome Completo"  name="name" setFieldValue={setCustomerName} autocomplete="off" />
               <Input type="text" placeholder="Número de telegone (WhatsApp)"  name="number" autocomplete="off" setFieldValue={setCustomerNumber} />
               <span>Insira o DD, Ex: 98991443355</span>
           </div>

           <div>
               <h2  className={styles.payment}>Pagamento é feito no momento do serviço</h2>
               <h2  className={styles.value}>Valor: {props.router.query.price} </h2>
           </div>

           <div className={styles.buttonContainer} onClick={handleClick}>
                <button>Agendar</button>
            </div>
       </div>    
    )


}

export default withRouter(CustomerInfo);