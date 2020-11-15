import React, { createContext, useContext, } from 'react'
import { firebase, firestore } from './firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const ChatContext = createContext()


export const ChatContextProvider = ({ children }) => {

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('CreatedAt')
    const [messages] = useCollectionData(query, { idField: 'id' });


    const sendMessage = async (message, currentUser) => {
        if (!message) return;
        const { uid, photoURL } = currentUser
        await messagesRef.add({
            text: message,
            CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
    }

    const value = {
        messages,
        sendMessage
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}
export const useChatContext = () => useContext(ChatContext)
