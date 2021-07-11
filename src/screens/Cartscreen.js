import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{Link} from 'react-router-dom'
import { addToCart } from '../actions/cartaction';
import Narbar from '../components/Narbar'

export default function Cartscreen(props) {
  const item_id=props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
const {cartItems}=cart
useEffect(()=>{
  if (item_id){
  dispatch(addToCart(item_id,qty))
  }
},[dispatch,item_id,qty])
const removeFromCartHandler=()=>{

}

return (
        <div>
            <div className="start">
          <div className="Grid-Container">
            <header>
              <Narbar></Narbar>
            </header>
            <div className="row top">
        <div className="col-2">
          <Link to="/"> Back To Order</Link>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <button id="proceed"
                  type="button"
                  className="primary block"
                >
                  Proceed to Checkout
                </button>
          </div>
        </div>
      </div>
      <footer></footer>
          </div>
        </div>
        {cartItems.length === 0 ? (
            <div>Cart is empty. <Link to="/">Go Shopping</Link></div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}
