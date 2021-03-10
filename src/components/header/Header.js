import React from 'react'
import UserContext from '../UserContext'

export default function  ()  {
    const {val} = React.useContext(UserContext)

    return <header>
        <div id="header">{val}</div>
    </header>
}