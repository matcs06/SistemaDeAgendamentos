import styles from "./Input.module.scss";

interface InputProps{
   placeholder: string;
   type: string;
   name: string;
   setFieldValue?: Function;
}

export default function Input(props:InputProps){

   const handleSet = (event:any) =>{
      props.setFieldValue(event.target.value)
   }

   return(
      <div className={styles.inputcontainer}>
        <input onChange={handleSet} type={props.type} placeholder={props.placeholder} name={props.name}  />
      </div>
   )
}