import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import { createUser } from '../sdk'
import Result from "./Result"

export default function RegisterUserP2() {
    const [email, setEmail] = useState('')
    const [newsletter, setNewsletter] = useState("daily")
    const [result, setResult] = useState([])
    const [showResult, setShowResult] = useState(false)

    const location = useLocation();

    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleNewsletterChange = (e) => {
        e.preventDefault()
        setNewsletter(e.target.value)
    }

    const user = {
        name: location.state.name,
        age: location.state.age,
        email: email,
        newsletter: newsletter
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        createUser(user).then( res => setResult( Object.values(res.user) ))
        setShowResult(true)
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange}></input>

                <select className="custom-select" value={newsletter} onChange={handleNewsletterChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>

                <input id="login-button" type="submit" value="Submit" />
            </form>

             {showResult && <Result user= {result}/>}
            
        </div>
    )
}
