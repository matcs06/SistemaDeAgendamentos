const getMonthName = (dateValue) =>{
   const day = dateValue.split('/')[0]
   const month = dateValue.split('/')[1]
   const year = dateValue.split('/')[2]
   const date = new Date(Number(year), Number(month) - 1, Number(day))  

   return date.toLocaleString('pt-BR', {month: 'long'})
}

const getWeekDayName = (dateValue) =>{
   var days = new Array(7);
        days[0] = "Domingo";
        days[1] = "Segunda";
        days[2] = "Terça";
        days[3] = "Quarta";
        days[4] = "Quinta";
        days[5] = "Sexta";
        days[6] = "Sábado";

   const day = dateValue.split('/')[0]
   const month = dateValue.split('/')[1]
   const year = dateValue.split('/')[2]
   const date = new Date(Number(year), Number(month) - 1, Number(day))  

   return days[date.getDay()]
}

const getYear = (dateValue) =>{
   
   const year = dateValue.split('/')[2]
   return year
}

const getDayInNumber = (dateValue) =>{
   
   const day = dateValue.split('/')[0]
   return day
}

const timeFormated = (timeValue) =>{
   const timeForm = timeValue.split(":")
   if(timeForm[0]==""){
      return ""
   }else{
      return timeForm[0] + ":" + timeForm[1]

   }

}

export{getMonthName, getWeekDayName,getYear, getDayInNumber, timeFormated}

