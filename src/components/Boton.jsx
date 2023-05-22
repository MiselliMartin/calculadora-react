export default function Boton(props){
/*
    const darkmode = (text) => {
        document.getElementById('boton').classList.toggle('dm-boton-contenedor')
        if (noEsNumero(text)){
            document.getElementById('boton').classList.toggle('dm-notANumber')
        }
        else if (esDEL(text)){
            document.getElementById('boton').classList.toggle('dm-esDEL')
        }
        else if (isEqual(text)){
            document.getElementById('boton').classList.toggle('dm-isEqual')
        }
        else if (isAC(text)){
            document.getElementById('boton').className.toggle('dm-isAC')
        }
    }
*/

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
        <div id='boton' 
        onClick={() => props.manejarClic(props.children)} 
        className={`boton-contenedor ${noEsNumero(props.children) ? 'notANumber' : ''} ${esDEL(props.children) ? 'esDEL' : ""} ${isEqual(props.children) ? 'isEqual' : ""}  ${isAC(props.children) ? 'isAC' : ""}`}>
            {props.children}
        </div>
    )    
}
