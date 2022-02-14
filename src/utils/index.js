const getMonthName = (dateValue) =>{

   if(dateValue === ""){
      return ""
   }else{
     const day = dateValue.split('/')[0]
     const month = dateValue.split('/')[1]
     const year = dateValue.split('/')[2]
     const date = new Date(Number(year), Number(month) - 1, Number(day))  

     return date.toLocaleString('pt-BR', {month: 'long'})
   }

}

const isTodayOrTomorrow = (someDate) => {

   if(someDate === "" || someDate == undefined){
      return ""
   }else{

     const day = someDate.split('/')[0]
     const month = someDate.split('/')[1]
     const year = someDate.split('/')[2]
     const today = new Date()
     const sentDate = new Date(Number(year), Number(month) - 1, Number(day))  

     if (sentDate.getDate() == today.getDate() &&
        sentDate.getMonth() == today.getMonth() &&
        sentDate.getFullYear() == today.getFullYear()){
           return "Hoje"
     }else{

       if(sentDate.getDate() == today.getDate() + 1 &&
         sentDate.getMonth() == today.getMonth() &&
         sentDate.getFullYear() == today.getFullYear()){
            return "Amanhã"
         }else{
            return someDate
         }
      }
   }

}

const getWeekDayName = (dateValue) =>{


   var days = new Array(7);
        days[0] = "Domingo";
        days[1] = "Segunda Feira";
        days[2] = "Terça Feira";
        days[3] = "Quarta Feira";
        days[4] = "Quinta Feira";
        days[5] = "Sexta Feira";
        days[6] = "Sábado";

   if(dateValue === ""){
      return ""
   }else{
      const day = dateValue.split('/')[0]
      const month = dateValue.split('/')[1]
      const year = dateValue.split('/')[2]
      const date = new Date(Number(year), Number(month) - 1, Number(day))  

      return days[date.getDay()]

   }


}

const getYear = (dateValue) =>{

   if(dateValue === "" || dateValue == undefined){
      return ''
   }else{
      const year = dateValue.split('/')[2]
      return year
   }
   
   
}

const getDayInNumber = (dateValue) =>{
   if(dateValue === "" || dateValue == undefined){
      return ''
   }else{
      const day = dateValue.split('/')[0]
      return day
   }
   

}

const timeFormated = (timeValue) =>{

   if(timeValue === "" || timeValue == undefined){
      return ''
   }else{
      const timeForm = timeValue.split(":")
      if(timeValue.split(" ")[1] == "indisponível"){
         return "X"
      }
      if(timeForm[0]==""){
         return ""
      }else{
         return timeForm[0] + ":" + timeForm[1]

      }
   }

   

}

const validateMorningTime = (from, to)=>{

   if(from != undefined){
       if(from.split(":")[0] > 11){
         window.alert("Manhã deve ter pelo menos uma hora a menos do inicio da tarde")
         throw new Error("Manhã deve ter pelo menos uma hora a menos do inicio da tarde")
      }

      if(from.split(":")[0] == 11 && from.split(":")[1] > 0 ){
         window.alert("Horário da manhã deve ter pelo menos uma hora")
         throw new Error("Horário da manhã deve ter pelo menos uma hora")
      }
   }
     
   if(to != undefined){
      if(to.split(":")[0] > 12){
         window.alert("Tempo inválido para horário da manhã")
         throw new Error("Tempo inválido para horário da manhã")
      }

      if(to.split(":")[0] == 12 && to.split(":")[1] > 0){
         window.alert("Tempo inválido para horário da manhã")
         throw new Error("Tempo inválido para horário da manhã")
      }

   }

   if(from != undefined && to != undefined){

      if(from.split(":")[0] > to.split(":")[0]){
         window.alert("Horário final precisa ser menor que horário inicial")
         throw new Error("Horário final precisa ser menor que horário inicial")
      }  
   }

    
}

const validateAfternoonTime = (from, to)=>{

   if(from != undefined){
      if(from.split(":")[0] < 12){
         window.alert("Este horário não pertence à tarde")
         throw new Error("Este horário não pertence à tarde")
      }    
   }
   
   if(from != undefined && to != undefined){

      if(from.split(":")[0] > to.split(":")[0]){
         window.alert("Horário final precisa ser menor que horário inicial")
         throw new Error("Horário final precisa ser menor que horário inicial")
      }  
   }


}

export{getMonthName, getWeekDayName,getYear, timeFormated, isTodayOrTomorrow, getDayInNumber, validateAfternoonTime, validateMorningTime }