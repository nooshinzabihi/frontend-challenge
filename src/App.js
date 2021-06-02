import React from 'react'
import './App.css'
import RegisterUserP1 from "./components/RegisterUserP1" 
import RegisterUserP2 from "./components/RegisterUserP2" 
import Background from "./components/Background"
import {Switch , Route} from "react-router-dom"

export default function App() {
  
  return (
    <div className="wrapper ">
      <div className="container">
      <h1>Create User</h1>
         <Switch>
           
          <Route exact path="/">
            <RegisterUserP1 />
          </Route>

          <Route path="/step2">
            <RegisterUserP2 />
          </Route>

        </Switch>
        </div>
        <Background />
    </div>

  )
}


