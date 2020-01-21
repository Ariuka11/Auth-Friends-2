import React from 'react'
import Friends from './friends'

const ProtectedPage = () => {
    return (
        <div>
            <h1>My Friends List</h1>
            <Friends />
        </div>
    )
}

export default ProtectedPage;