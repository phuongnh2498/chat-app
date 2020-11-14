import React from 'react'
import { Button } from 'react-bootstrap'
import { auth, firebase } from '../Context/firebase'
export default function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="text-center">
            <h3 className="login__title ">Login</h3>
            <Button onClick={signInWithGoogle}>
                Sign in with google
            </Button>
        </div>
    )
}
