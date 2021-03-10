import React from 'react'
import UserContext from '../UserContext'

export default function ({value, style, children}) {

    const {val, setVal} = React.useContext(UserContext)

    //Formata a string
    function formatBeforeSum(str){
        let numsFormat = str.replace('x', '*')  //Coloca o simbolo de divisão suportado pelo JS
        numsFormat = numsFormat.replace('÷', '/')   //Coloca o simbolo de divisão suportado pelo JS
        return numsFormat
    }

    //Função de somar, usando o eval
    const soma = values => {
        try{
            if(values.length >= 3){
                values = formatBeforeSum(values)    //Formata e entega um valor pronto pra soma
                return eval(values)
            }else {
                return ''
            }
        }catch{
            return ''
        }
    }

    const onButton = () => {

        //Chama a função de soma caso o usuario aperte '='
        if(value === '='){
            setVal(soma(val))
            return
        }

        //Limpa o header da calculadora
        if(value === 'AC'){
            setVal('')
            return
        }

        setVal((v) => v += value) //Concatena o valor antigo com valor do botão pressionado
    }

    return <button onClick={() => onButton()} className="btn" style={{...style}}>{children}</button>
}