const timeFormated = (timeValue) =>{
   var timeForm = new Array(3);
   timeForm = timeValue.split(":")
   if(timeForm[0] ==""){
      return ""
   }else{
      return timeForm[0] + ":" + timeForm[1]

   }

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

export{timeFormated,getWeekDayName}
