import styles from "./ChooseTime.module.scss"
import { withRouter } from 'next/router'

function ChooseTime(props: any){

    const serviceName = "asdas"

    const handleClick = ()=>{
        window.location.pathname = "/client/servicesList"
    }

    return(
        <div className={styles.container}>
            <h2>Servico: {props.router.query.serviceName}</h2>

            <h3>Escolha um dia</h3>
            <div className={styles.weekDays}>
                <div className={styles.wekkDay}></div>
            </div>

            <div>
                <h2>Escolha um horário</h2>

                <h2>Manhã</h2>
                <div className={styles.times}>
                    <div className={styles.time}></div>
                </div>

                <h2>Tarde</h2>
                <div className={styles.times}>
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