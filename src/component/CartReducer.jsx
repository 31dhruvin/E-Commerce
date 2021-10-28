import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const CartReducer =(state,action) =>{
    const {shoppingCart, totalPrice, totalQty} =state //shoppingCart, totalPrice, totalQty has been destructerd in cartcontext file
    let pro
    let index
    let updatedPrice
    let updatedQty

    switch (action.type) {
        case 'ADD to Cart':
            const check = shoppingCart.find(pro=>pro.name === action.name)
            if(check){
                toast.info('this product is already in your cart', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                return state
            }
            else{
                pro=action.pro
                pro['stock'] = 1
                pro['TotalProductPrice'] = pro.price * pro.stock;
                updatedQty = totalQty+1
                updatedPrice = totalPrice + pro.price
                return{
                    shoppingCart: [pro, ...shoppingCart],totalPrice:updatedPrice, totalQty:updatedQty
                }
            }
            break
            case 'INC':
                pro = action.cart;  
                pro.stock = ++pro.stock;
                pro.TotalProductPrice = pro.price * pro.stock;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + pro.price;
                index = shoppingCart.findIndex(cart => cart.name === action.name);
                shoppingCart[index] = pro;
                return {
                    shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
                break;
                case 'DEC':
                    pro = action.cart;
                    if (pro.stock > 1) {
                        pro.stock = pro.stock - 1;
                        pro.TotalProductPrice = pro.price * pro.stock;
                        updatedPrice = totalPrice - pro.price;
                        updatedQty = totalQty - 1;
                        index = shoppingCart.findIndex(cart => cart.name === action.name);
                        shoppingCart[index] = pro;
                        return {
                            shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                        }
                    }
                    else {
                        return state;
                    }
                    break;
        
                case 'DELETE':
                    const filtered = shoppingCart.filter(pro => pro.name !== action.name);
                    pro = action.cart;
                    updatedQty = totalQty - pro.stock;
                    updatedPrice = totalPrice - pro.stock * pro.price;
                    return {
                        shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
                    }
                    break;
        
                default:
                    return state;

    }
}