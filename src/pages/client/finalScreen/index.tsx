import Router, {withRouter } from 'next/router'
import CheckIcon from '@mui/icons-material/Check';
import { fontSize } from "@mui/system";
import Button from '../../../components/Button';
import styles from "./finalScreen.module.scss"

function FinalScreen(props:any){

    const handleClick = ()=>{
        Router.push({
            pathname: '/client/startPage'
        })      
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.congrats}>Parabéns!!!</h2>
            <CheckIcon sx={{fontSize:100}}/>
            <div className={styles.text}>
                <h2>Seu agendamento do serviço <strong>{props.router.query.serviceName}</strong>  às <strong>{props.router.query.serviceTime} horas</strong> foi realizado com sucesso.</h2>
            </div>

            <div className={styles.text}>
                <p>Atenção!! <br />
                   Compareça ao endereço:<br />
                  <strong> Rua Santa Inês - VIla Silva (Ninho do Rato)</strong><br />
                   no horário agendado.<br /> 
                </p>
                <p>Caso necessário, entraremos em contato pelo WhatsApp para mais 
                   informações sobre o endereço. <br />
                </p>
                <p>O pagamento é feito depois serviço</p>
            </div>

            <div className={styles.buttonContainer} onClick={handleClick}>
                <button>Voltar ao início</button>
            </div>
        </div>
    )

}

export default withRouter(FinalScreen)