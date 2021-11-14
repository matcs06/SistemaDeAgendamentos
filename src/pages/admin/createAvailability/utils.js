const validateMorningTime = (from, to)=>{

   if(from != undefined){
       if(from.split(":")[0] > 11){
         window.alert("Manhã deve ter pelo menos uma hora a menos do inicio da tarde")
      }

      if(from.split(":")[0] == 11 && from.split(":")[1] > 0 ){
         window.alert("Horário da manhã deve ter pelo menos uma hora")
      }
   }
     
   if(to != undefined){
      if(to.split(":")[0] > 12){
         window.alert("Tempo inválido para horário da manhã")
      }

      if(to.split(":")[0] == 12 && to.split(":")[1] > 0){
         window.alert("Tempo inválido para horário da manhã")
      }
   }

    
}

const validateAfternoonTime = (from, to)=>{

   if(from != undefined){
      if(from.split(":")[0] < 12){
         window.alert("Este horário não pertence à tarde")
      }    
   }
   
   if(from != undefined && to != undefined){

      if(from.split(":")[0] < to.split(":")[0]){
         window.alert("Horário final precisa ser menor que horário inicial")
      }  
   }


}

export {validateMorningTime, validateAfternoonTime}