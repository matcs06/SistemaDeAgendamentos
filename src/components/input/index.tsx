import styles from "./Input.module.scss";

interface InputProps{
   placeholder: string;
   type: string;
   name: string;
   setFieldValue?: Function;
   disabled?: string;
}

export default function Input(props:any){

   const handleSet = (event:any) =>{
      props.setFieldValue(event.target.value)
   }

   return(
      <div className={styles.inputcontainer}>
        <input onChange={handleSet} type={props.type} placeholder={props.placeholder} name={props.name} {...props} />
      </div>
   )
}