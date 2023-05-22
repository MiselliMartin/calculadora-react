export default function Boton(props){

    const noEsNumero = text => {
        return isNaN(text) && (text != ".") && (text != "DEL") && (text != "=")
    }

    const esDEL = text => {
        return text == "DEL"
    }

    const isEqual = text => {
        return text == "="
    }

    const isAC = text => {
        return text == "AC"
    }

    return(
        <div className={`boton-contenedor ${noEsNumero(props.children) ? 'notANumber' : ''} ${esDEL(props.children) ? 'esDEL' : ""} ${isEqual(props.children) ? 'isEqual' : ""}  ${isAC(props.children) ? 'isAC' : ""}`}>
            {props.children}
        </div>
    )    
}