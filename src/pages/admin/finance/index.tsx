import styles from "./finance.module.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import Input from "../../../components/input"
import Button from "../../../components/Button";

import api from "../../../api";

interface ITransactions{
   id:string;
   title:string;
   value:string;
   formatedDate: string;
}

const Finance = () => {

  const [transactions, setTransactions] = useState<ITransactions[]>()
  let income=0
  let outcome=0
  const [rincome, setRincome] = useState(0)
  const [routcome, setRoutcome] = useState(0)

  const [showModal, setShowModal] = useState(false)
  const [ isLoading, setIsLoading]= useState(true)

  const [description,setDescription] = useState("")
  const [value,setValue] = useState("")
  const [modalDate,setModalDate] = useState("")

  useEffect(()=>{

     async function loadItems(){
        try {         
          const response = await api.get<ITransactions[]>("transactions")

          setTransactions(response.data)
          setRincome(income)
          setRoutcome(outcome)
          setIsLoading(false)
          

        } catch (error) {
           window.alert("Not able to load transactions")
        }
      
     }
     
     loadItems()

     return () => {
        setTransactions([]);
     };
  
  },[showModal, isLoading])

  const handleCreateTransaction = async () => {
      try {
         const token = localStorage.getItem("token"); 

         await api.post("/transactions", {
            title: description ,
            value: value,
            formatedDate: modalDate,
            }, {
               headers: {
               Authorization: "Bearer " + token,
            },
         });

         window.alert("Transa????o criada com sucesso")
         setShowModal(false)
         setIsLoading(true)

      } catch (error) {
         window.alert("Erro ao criar transa????o")
      }
 
  }

  const handleDeleteTransaction = async (transactionId:string) =>{

   try {
      const token = localStorage.getItem("token");
      await api.delete(`/transactions/${transactionId}`,{
          headers: { Authorization: "Bearer " + token },
      })

      setIsLoading(true)
   } catch (error) {
      window.alert("Erro ao deletar transa????o")
   }
  }

  return (
     <>
     <div className={styles.container}>
        <div className={styles.header}>
           <h2>IFinance</h2>
        </div>
        <div className={styles.infoContaiener}>
           <div className={styles.cardType}>
              <div className={styles.topCard}>
                 <p className={styles.type}>Entradas</p>
                  <ArrowDownwardIcon sx={{ color: "#4ECB71" }}/>
              </div>
              
              <p className={styles.value}>R$ {rincome.toFixed(2)}</p>
              
           </div>
           <div className={styles.cardType}>
              <div className={styles.topCard}>
                 <p className={styles.type}>Sa??das</p>
                 <ArrowUpwardIcon sx={{ color: "#CB4E4E" }}/>
              </div>
              <p className={styles.value}>R$ {routcome.toFixed(2)}</p>
           </div>
           <div className={styles.cardType} id={styles["total"]}>
              <div className={styles.topCard}>
                 <p className={styles.type}>Total</p>
                 <AttachMoneyIcon sx={{ color: "#fff" }}/>
              </div>
              
              <p className={styles.value}>R$ {(rincome + routcome).toFixed(2)}</p>
           </div>
        </div>
        <div className={styles.addNewTransaction} onClick={()=>{setShowModal(true)}}>
           <AddIcon sx={{ color: "#4ECB71" }}/>
           <p>Nova Transa????o</p>
        </div>
        <div className={styles.infoTitle}>
           <p>Descri????o</p>
           <p>Valor</p>
           <p>Data</p>
           <p>Deletar</p>
        </div>
        <div className={styles.transactionsContainer}>
       
            {transactions && transactions.map((transaction)=>{
              
              if(Number(transaction.value) > 0){
               income = income + Number(transaction.value)
              }else{
                outcome = outcome + Number(transaction.value)
              }

              return (
               <div className={styles.transactions} key={transaction.id}>
                  <p className={styles.transactionTitle}>{transaction.title}</p>
                  <p>{transaction.value} R$</p>
                  <p>{transaction.formatedDate}</p>
                  <div className={styles.remove} onClick={()=>{handleDeleteTransaction(transaction.id)}}>
                     <RemoveCircleIcon sx={{ color: "#CB4E4E" }}/>
                  </div>
               </div>
              )

           })} 

        </div>
        
     </div>

        {showModal && 
        <Modal modalTitle="Adicionar Transa????o" viewModal={setShowModal}>
           <Input type="text" placeholder="Descri????o" name="description" setFieldValue={setDescription}/>
           <Input type="text" placeholder="Valor" name="value" setFieldValue={setValue}/>
           <Input type="date" placeholder="Data" name="date" setFieldValue={setModalDate}/>
           <Button handleClick={handleCreateTransaction} page="/admin/finance">Cadastrar</Button>
           <Button handleClick={()=>{setShowModal(false)}} page="/admin/finance">Sair</Button>
        </Modal>}

     </>
  )
}

export default Finance;