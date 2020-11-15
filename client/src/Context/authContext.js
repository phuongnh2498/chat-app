import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, firebase } from './firebase'

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    const signOut = () => {
        auth.signOut()
    }
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])

    const value = {
        currentUser,
        signInWithGoogle,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
