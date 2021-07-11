import React, { useEffect, useRef, useState } from "react";
import Narbar from "../components/Narbar";
import data from "../data.js";
import Items from "../components/Items";

export default function Homescreen() {
  const [page, setpage] = useState(0);
  const items = data.items;
  const pos = items.length;
  const descrip = data.details.substring(0, 150) + "...";
  const getContent = (products) => {
    let content = [];
    for (let i = 0 + page * 4; i < 4 * page + 4; i++) {
      const item = items[i];
      content.push(<Items key={item.id} item={item}></Items>);
    }
    return content;
  };
  const Previous = () => {
    page >= 1 ? setpage(page - 1) : setpage(1);
  };
  const Next = () => {
    page < pos / 4 - 1 ? setpage(page + 1) : setpage(page);
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
        <div className="content">
          <button id="gl" onClick={() => Previous()}>
            &lt;
          </button>
          {getContent(items)}
          <button id="gl" onClick={() => Next()}>
            &gt;
          </button>
        </div>
        <div id="buttonalign">
          <button id="glprePho" onClick={() => Previous()}>
            &lt;
          </button>
          <button id="glNextPho" onClick={() => Next()}>
            &gt;
          </button>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}
