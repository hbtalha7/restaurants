import { CART_ADD_ITEM } from "../constants/cartcontants"
import data from "../data"

export const addToCart=(item_id,qty)=> (dispatch,getState)=>{
    const item = data.items.find((x) => x.id === Number(item_id));
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:item.name,
            img:item.img,
            price:item.price,
            countInStock: item.countInStock,
      product: item.id,
      qty,
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}