import Button from "../button/Button"
import React from 'react'

export default function () {
    
    const styleBtnFis = {
        color: 'white',
        backgroundColor: "rgb(138, 123, 138)"
    }

    const styleBtnSec = {
        color: '#333'
    }

    return <div className="body">
        <Button style={styleBtnFis} value="(" >(</Button>
        <Button style={styleBtnFis} value=")">)</Button>
        <Button style={styleBtnFis} value="%">%</Button>
        <Button style={styleBtnFis} value="AC">AC</Button>
        <Button style={styleBtnSec } value="7">7</Button>
        <Button style={styleBtnSec } value="8">8</Button>
        <Button style={styleBtnSec } value="9">9</Button>
        <Button style={styleBtnFis} value="÷">÷</Button>
        <Button style={styleBtnSec} value="4">4</Button>
        <Button style={styleBtnSec} value="5">5</Button>
        <Button style={styleBtnSec} value="6">6</Button>
        <Button style={styleBtnFis} value="x">x</Button>
        <Button style={styleBtnSec} value="1">1</Button>
        <Button style={styleBtnSec} value="2">2</Button>
        <Button style={styleBtnSec} value="3">3</Button>
        <Button style={styleBtnFis} value="-">-</Button>
        <Button style={styleBtnSec} value="0">0</Button>
        <Button style={styleBtnSec} value=".">.</Button>
        <Button style={{...styleBtnFis, backgroundColor:'red'}} value="=">=</Button>
        <Button style={styleBtnFis} value="+">+</Button>
    </div>
}