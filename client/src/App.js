import React from 'react'
import './assets/app.scss'
import { Header, Footer } from './Component'
import { AuthProvider } from "./Context/AuthContext"
import { ChatContextProvider } from "./Context/ChatContext"

import AppContent from './AppContent'

function App() {
  return (
    <AuthProvider>
      <ChatContextProvider>
        <div className="App">
          <Header />
          <AppContent />
          <Footer />
        </div >
      </ChatContextProvider>
    </AuthProvider>
  );
}
export default App;