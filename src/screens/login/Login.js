import React, {useState, useEffect, useContext} from 'react'
// import useAuth from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button} from './Login__element'
import axios from "axios"
import {GrShieldSecurity} from "react-icons/gr"

// import {AuthContext} from "../../App"

// new CONFIGUARATION
import { login } from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
const Signin = () => {
    // const {dispatch} =  React.useContext(AuthContext)
    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);

    // New CONFIGURATION
    const {user, isFetching, dispatch} = useContext(AuthContext);
    console.log(isFetching)
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(values)
        const email = values.email
        const password = values.password
        login({email, password, roleId}, dispatch);
    }
    
    return (
        <>
            <LoginWrapper>
                <LoginBanner>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/>
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <div
                        className='header'
                    >
                        <GrShieldSecurity style={{fontSize: 20, color: "#263253"}}/>
                        <h2>Candid Security</h2>

                    </div>

                    <LoginForm>

                        <div >
                            {/* welcome back */}
                            <h3>Welcome back!</h3>

                            {/* discription */}
                            <p>Sign in to continue to dashboard</p>
                        </div>
                        <FromBx>
                            <span>Email Address</span>
                            <Input 
                                type = "text" 
                                placeholder = "Enter email address"
                                name = "email"
                                value = {values.email}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <span>Password</span>
                            <Input 
                                name= "password"
                                type = "text" 
                                placeholder = "Enter password" 
                                value = {values.password}
                                onChange = {handleChange}    
                            />
                        </FromBx>

                        <FromBxRem >
                            <label><InputCheck type="checkbox" name =""/> Remember me</label>
                        </FromBxRem>

                        <FromBx>
                            <Button type="submit">
                                {isFetching ? (
                                    "mnmnmn"
                                ): "Sign In"}
                            </Button>
                        </FromBx>
                    </LoginForm>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            width: "100%",
                            marginBottom: "30"
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                                fontWeight: 500
                            }}
                        >
                            &copy; CANDID Security
                        </p>
                    </div>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}

export default Signin;
