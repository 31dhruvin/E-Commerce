import React,{createContext, useReducer} from 'react'
import {CartReducer} from './CartReducer' //In cartreducer we will manipulate the state inorder to add or delte items from the state 
export const CartContext = createContext()
export const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer,{shoppingCart: [],totalPrice: 0,totalQty: 0})
    return(
        //for manipulating state we will use dispatch function to pass the function to reducer and change the state
        <CartContext.Provider value={{...cart, dispatch}}> 
            {props.children}     

        </CartContext.Provider>
    )
}


 