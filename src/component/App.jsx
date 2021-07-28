import React, { useState } from 'react';
import Navbar from './Navbar'
import {BrowserRouter as Router, Link,Switch,Route, useHistory, Redirect} from 'react-router-dom'
import Calamine from "./Calamine"
import Data from './product.json'
import UserStore from '.././Store'
function App() {
    const [userData, setUserData] = useState({
        auth: false,
      });
    return (
        <UserStore.Provider value={{ userData, setUserData }}>
        
        <div>
           <Navbar /> 
        </div>
        </UserStore.Provider>
    )
}

export default App
