import React, {useEffect, useState} from 'react'
import Friends from './Friends'
import FriendForm from './FriendForm'
import { axiosWithAuth } from './axiosWithAuth'

const ProtectedPage = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            <h1>My Friends List</h1>
            <Friends friends = {friends} />
            <FriendForm friends = {friends} />
        </div>
    )
}

export default ProtectedPage;