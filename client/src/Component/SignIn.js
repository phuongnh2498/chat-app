import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext'
export default function SignIn() {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="text-center">
            <h3 className="login__title ">Login</h3>
            <Button onClick={signInWithGoogle}>
                Sign in with google
            </Button>
        </div>
    )
}
