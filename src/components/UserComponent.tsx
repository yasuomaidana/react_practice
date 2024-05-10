import React, { useEffect, useState } from 'react'

interface UserData {
    username: string
    email: string
}

const UserComponent = () => {
    const [userData, setUserData] = useState<UserData>()
    useEffect(() => {
        fetch('http://localhost:8000/user')
            .then(response => response.json())
            .then(data => setUserData(data))
    }, [])
  return (
    <div>
      <h1>User Data</h1>
      <p>Username: {userData?.username}</p>
      <p>Email: {userData?.email}</p>
    </div>
  )
}

export default UserComponent