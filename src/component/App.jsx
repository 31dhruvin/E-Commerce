import React, { useState } from 'react';
import Navbar from './Navbar'

import UserStore from '.././Store'
import { CartContextProvider } from './Cartcontext';
function App() {
    const [userData, setUserData] = useState({
        auth: false,
      });
    return (
        <UserStore.Provider value={{ userData, setUserData }}>
        <CartContextProvider>
        <div>
           <Navbar /> 
        </div>
        </CartContextProvider>
        </UserStore.Provider>
    )
}

export default App
