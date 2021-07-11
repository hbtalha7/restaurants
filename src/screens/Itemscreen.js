import React, { useEffect, useState } from "react";
import data from "../data";
import Ratings from "../components/Ratings";
import { useDispatch, useSelector } from "react-redux";
import { detailsitem } from "../actions/productactions";
export default function Itemscreen(props) {
  const item_id = props.match.params.id
  const dispatch = useDispatch()
  const itemdetail = useSelector(state => state.itemdetail)
  const {loading,error,item}=itemdetail
  
  useEffect(()=>{
    dispatch(detailsitem(item_id))
  },(dispatch),[item_id])
  
  console.log(item)
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    props.history.push(`/cart/${item.id}?qty=2`);
  };
  return (
      <div class="item-container" id="item-container">
    {/* <div className="item"> */}
      <div className="col-1">
        <img className="large" src={item.img} alt={item.name}></img>
      </div>

      <div className="col-2">
        <ul id="ulforitem">
          <li>
            <h1>{item.name}</h1>
          </li>
          <li>
            <Ratings rating={item.rating} numreview={item.numReviews}></Ratings>
          </li>
          <li>
            {/* <h4>{item.description.substring(0,200)}</h4> */}
          </li>
          <li>
            <h1>${item.price}</h1>
          </li>
        </ul>
      </div>
      <div className="col-3">
        <div className="card card-body">
        <ul id="ulforitem">
            <li>
              <div className="item">
                <div>Price:</div>
                <div className="price">${item.price}</div>
              </div>
            </li>
            <li>
              <div className="item" id="cartitem">
                Status:
                {item.numReviews > 1 ? (
                  <span className="success">In Stock</span>
                ) : (
                  <span className="error">Unavailable</span>
                )}
              </div>
            </li>
            {item.countInStock > 0 && (
              <>
                <li>
                  <div className="item">
                    <div>Qty</div>
                    <div>
                      <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <button className="primary block">Add to Cart</button>
                </li> */}
                <button onclick={addToCartHandler} className="primary block" id="cartbtn">Add to Cart</button>
              </>
            )}
          </ul>
        </div>
      </div>
    {/* </div> */}
    </div>
  );
}
