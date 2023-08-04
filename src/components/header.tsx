import styles from "./header.module.css"
//Ao importar styles, usaremos a class tal qual um elemento javascript dentro do html, da mesma maneira que acessamos a props no arquivo principal
//O nome que virá logo após "styles" será o nome da função a ser importada
import IgniteLogo from '../assets/ignite-logo.svg';


export function Header() {
    return (
        <header className={styles.header} >
        <img src={IgniteLogo} alt="Logotipo do Ignite" />
    
        </header>
        
    )
}
//Acima, quando importamos Ignite logo, note que ainda que a importação seja de um arquivo css, tratamos como um elemento javascript, desta forma, ao utilizarmos o recurso no código, devemos colocar entre curly brackets, assim como qualquer outro elemento javacript dentro do XML