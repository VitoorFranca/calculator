import React from 'react'
import UserContext from '../UserContext'
import Body from '../body/Body'
import Header from '../header/Header'

export default ()  => {

    const [val, setVal] = React.useState('')

    return (
        <UserContext.Provider value={{val, setVal}}>
            <div className="calculator">
                <Header />
                <Body />
            </div>
        </UserContext.Provider>
    )
}