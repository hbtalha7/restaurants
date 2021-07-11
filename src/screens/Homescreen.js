import React, { useEffect, useRef, useState } from "react";
import Narbar from "../components/Narbar";
import data from "../data.js";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { listitems } from "../actions/productactions";

export default function Homescreen() {
  const [page, setpage] = useState(0);
  // const items = data.items;
  const dispatch = useDispatch()
  const itemlist = useSelector((state) => state.itemlist)
  const {loading ,error,items}=itemlist

  useEffect(()=>{
    dispatch(listitems());
  },[dispatch]);

  // const pos = items.length ;
  const descrip = data.details.substring(0, 150) + "...";
  // const getContent = (products) => {
  //   let content = [];
  //   for (let i = 0 + page * 4; i < 4 * page + 4; i++) {
  //     const item = items[i];
  //     content.push(<Items key={item.id} item={item}></Items>);
  //   }
  //   return content;
  // };
  const Previous = () => {
    // page >= 1 ? setpage(page - 1) : setpage(1);
  };
  const Next = () => {
    // page < pos / 4 - 1 ? setpage(page + 1) : setpage(page);
  };

  const countRef = useRef(0);
  useEffect(() => countRef.current++);
  return (
    <div className="start">
      <div className="Grid-Container">
        <header>
          <Narbar></Narbar>
        </header>
        <div className="main">
          <h1 id="lunch">
            What are you <br />
            having for Lunch?
          </h1>
        </div>
        <div className="description">{descrip}</div>
        <div className="content"> {items.map((item)=>(
            <Items key={item.id} item={item}></Items>
          ))}</div>
        <footer></footer>
      </div>
    </div>
  );
}
