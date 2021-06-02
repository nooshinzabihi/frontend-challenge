import React from 'react'

export default function Result(props) {
    return (
        <div className="result">
            <h2>Done</h2>
            <p>hi <span>{props.user[0]}</span> your account is created .</p>
            <p>you can check <span>{props.user[3]}</span> news in your email : {props.user[2]} .</p>
        </div>
    )
}
