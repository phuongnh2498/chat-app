import React from 'react'
import { auth } from '../Context/firebase'
export default function ChatMessage({ message }) {
    const { text, uid, photoURL } = message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    if (messageClass === 'sent') {
        return (
            <div className="message__container ">
                <p className={`message__text ${messageClass}`}>
                    {text}
                </p>
                <div className="message__image">
                    <img className="profile__image" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="message__container ">
                <div className="message__image">
                    <img className="profile__image" src={photoURL} alt="" />
                </div>
                <p className={`message__text ${messageClass}`}>
                    {text}
                </p>
            </div>
        )
    }

}
