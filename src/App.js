import React, {useEffect, useContext} from "react"
import axios from "axios"
import Signin from "./screens/login/Login"
import Layout from "./components/c-layout/Layout"
import Patrol from "./screens/patrol/Patrol"
import Guards from "./screens/patrol/Guards"

import "./assets/css/grid.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {AuthContext} from "./context/authContext/AuthContext"

function App() {
		const {user, isFetching} = useContext(AuthContext)
		console.log(user);
		console.log(isFetching)
      return (
        <>
      {/* New AuthProvidr */}
      <Router>
        <Switch>
         <Route exact path="/">{ user? <Patrol/> : <Redirect to="/login" />}</Route>
           <Route path = "/login">
            {!user ? <Signin/> : <Redirect to="/" />}
          </Route>
          <Route exact element = "/guards-form">
            <Guards/>
          </Route>
        </Switch>
      </Router>
      
    </>
  )
}

export default App