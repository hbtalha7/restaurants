import React from "react";
import { Link } from "react-router-dom";
export default function Narbar() {
  return (
    <>
      <div className="Band">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </label>
        <h2 id="BandName">Up North</h2>
        <Link to="/cart">
          <input type="checkbox" id="checkcart" />
          <label for="checkcart" class="checkcart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </label>
        </Link>
        <ul>
          <li>
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>Service</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>Cuisine</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>Book</a>
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/cart" id="cencart">
        <button id="cencart">CART</button>
      </Link>
    </>
  );
}
