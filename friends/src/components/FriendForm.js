import React, {useState } from 'react';
import {axiosWithAuth} from './axiosWithAuth'

const FriendForm = () => {

    const [newFriend, setNewFriend] = useState({
        name:'',
        age: '',
        email:'',
    })


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/friends', newFriend)
            .then(res => {
                console.log(res)
                setNewFriend(
                    {
                        name:'',
                        age: '',
                        email:'',
                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
  
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    return(

        <div>
            <form onSubmit = {handleSubmit}>
                <input
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={newFriend.name} 
                    onChange ={handleChange} 
                 />
                <input
                    type='number' 
                    name='age' 
                    placeholder='Age' 
                    value={newFriend.age} 
                    onChange ={handleChange} 
                 />
                <input
                    type='email' 
                    name='email' 
                    placeholder='Email Address' 
                    value={newFriend.email} 
                    onChange ={handleChange} 
                 />
                 <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;