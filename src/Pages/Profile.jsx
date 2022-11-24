import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Components/Context/UserAuthContext'

const Profile = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login")
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>Profile: {user && user.Email}
        <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Profile