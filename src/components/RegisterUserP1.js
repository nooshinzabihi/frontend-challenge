import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

export default function RegisterUserP1() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    let history = useHistory();

    const handleNameChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleAgeChange = (e) => {
        e.preventDefault()
        setAge(e.target.value)
    }

    return (
        <div>
            <form className="form">
                <input type="text" name="name" placeholder="name" value={name} onChange={handleNameChange}></input>
                <input type="text" name="age" placeholder="age" value={age} onChange={handleAgeChange}></input>
                <button type="button" id="login-button" onClick={ () => history.push("/step2", { name, age }) }>Next</button>
               
            </form>
        </div>
    )
}
