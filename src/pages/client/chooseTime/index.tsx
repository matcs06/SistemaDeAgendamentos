import styles from "./chooseTime.module.scss"
import Router, {withRouter } from 'next/router'
import { useEffect, useState } from "react"
import api from "../../../api"
import {getWeekDayName, isTodayOrTomorrow, timeFormated} from "./utils.js"
interface AvailabilityFields{
    id:string;
    date: string;
}

interface availabilityDetails{
    availability: AvailabilityFields;
    morning_available_times: []
    afternoon_available_times: []
}

function ChooseTime(props: any){

    const [daysAvailable, setDaysAvailable] = useState<AvailabilityFields[]>([])
    const [timesAvailable, setTimesAvailable] = useState<availabilityDetails>()

    const handleClick = (serviceName:string, price:string)=>{
        Router.push({
            pathname: '/client/customerInfo',
            query: { serviceName, price }
        })      
    }

    const onClickDay = async(id:string)=>{
    
        try {
            const response = await api.get<availabilityDetails>(`/availability/details/${id}`,{    
            params:{service_duration: props.router.query.serviceDuration+ ":00"}                          
            })
            setTimesAvailable(response.data)
        } catch (error) {
            console.log(error)
        }
        
        
    }

    useEffect(()=>{
    
      async function loadItems() { 
        const response = await api.get<AvailabilityFields[]>("/availability");

        setDaysAvailable(response.data);
      }
      loadItems();
      return () => {
         setDaysAvailable([]);
      };
    },[])

    return(
        <div className={styles.container}>
            <h2 className={styles.titleService}>{props.router.query.serviceName}</h2>

            <h3 className={styles.pickDayTitle}>Escolha um dia</h3>
            <div className={styles.weekDays}>
                {daysAvailable && daysAvailable.map((day)=>(
                <>
                    <div key={day.id} className={styles.weekDay} onClick={()=>{onClickDay(day.id)}}>
                        <p>{isTodayOrTomorrow(day.date)}</p> 
                        <p>{getWeekDayName(day.date)} feira</p>
                    </div>
                </>
                ))}  
            </div>

            <div className={styles.pickTimeContainer}>
                <h2 className={styles.pickTimeTitle} >Escolha um horário</h2>

                <h2>Manhã</h2>
                <div className={styles.times}>
                    {timesAvailable?.morning_available_times && timesAvailable.morning_available_times.map((time)=>(
                        <div key={time} className={styles.time}>{timeFormated(time)}</div>
                    ))}
                </div>
                <h2>Tarde</h2>
                <div className={styles.times}>
                    {timesAvailable?.afternoon_available_times && timesAvailable.afternoon_available_times.map((time)=>(
                        <div key={time} className={styles.time}>{timeFormated(time)}</div>
                    ))}
                </div>
            </div>

            <div className={styles.buttonContainer} onClick={()=>handleClick("Design Natural", "15R$")}>
                <button>Continuar</button>
            </div>
        </div>
    )
}

export default withRouter(ChooseTime);