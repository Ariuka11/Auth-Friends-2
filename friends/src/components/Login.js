import React, {useState} from 'react'
import { axiosWithAuth } from './axiosWithAuth'

const Login = (props) => {

    const [credentials, setCredentials] = useState ({})

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLogin = e => {
        e.preventDefault();
        axiosWithAuth().post(`/login`, credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friendsPage')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit = {handleLogin}> 
                <input 
                    type = 'text'
                    placeholder = 'Username'
                    name = 'username'
                    value = {credentials.username}
                    onChange = {handleChange}
                />
                <input 
                    type = 'password'
                    placeholder = 'Password'
                    name = 'password'
                    value = {credentials.password}
                    onChange = {handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login