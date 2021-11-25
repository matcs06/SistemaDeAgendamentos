import styles from "./chooseTime.module.scss"
import { withRouter } from 'next/router'

function ChooseTime(props: any){

    const serviceName = "asdas"

    const handleClick = ()=>{
        window.location.pathname = "/client/servicesList"
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.titleService}>Servico: {props.router.query.serviceName}</h2>

            <h3 className={styles.pickDayTitle}>Escolha um dia</h3>
            <div className={styles.weekDays}>
                <div className={styles.weekDay}>Segunda</div>
                <div className={styles.weekDay}>Segunda</div>
                <div className={styles.weekDay}>Segunda</div>
                <div className={styles.weekDay}>Segunda</div>
                <div className={styles.weekDay}>Segunda</div>
            </div>

            <div className={styles.pickTimeContainer}>
                <h2 className={styles.pickTimeTitle} >Escolha um horário</h2>

                <h2>Manhã</h2>
                <div className={styles.times}>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>     
                </div>
                <h2>Tarde</h2>
                <div className={styles.times}>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                    <div className={styles.time}></div>
                </div>
            </div>

            <div className={styles.buttonContainer} onClick={handleClick}>
                <button>Continuar</button>
            </div>
        </div>
    )
}

export default withRouter(ChooseTime);