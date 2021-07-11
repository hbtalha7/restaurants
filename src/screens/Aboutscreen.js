import React from 'react'
import {Link} from 'react-router-dom'
import Narbar from '../components/Narbar'
export default function Aboutscreen() {
    return (
        <>   <div className="start">
        <div className="Grid-Container">
          <header>
            <Narbar></Narbar>
          </header>
        <div className="about">
            <Link to="/"> Back To Order</Link>
            <h4><p>
            RELATED TO UP NORTH - THE RAINTREE, TEYNAMPET
Restaurants in The Raintree, Teynampet, Restaurants in Chennai, Chennai Restaurants, Teynampet restaurants, Best Teynampet restaurants, Central Chennai restaurants, North Indian Restaurants in Chennai, North Indian near me, North Indian Restaurants in Teynampet, Fine Dining in Chennai, Fine Dining near me, Fine Dining in Teynampet, in Chennai, near me, in Teynampet, Order food online in Teynampet, Order food online in Chennai, New Year Parties in Chennai, Christmas' Special in Chennai
RESTAURANTS AROUND TEYNAMPET
Anna Salai restaurants, RK Salai (Cathedral Road) restaurants, Alwarpet restaurants, Gopalapuram restaurants
                </p></h4>
        </div>
        <footer></footer>
          </div>
        </div>
        </>
    )
}
