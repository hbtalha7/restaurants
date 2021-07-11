import React from 'react'
import{ Link} from 'react-router-dom'
export default function items(props) {
    const {key ,item}=props;
    return (
        <div>
            <div key={key} className="card">
            <img className="medium" id="imgmed" src={item.img} alt={item.name} />
            <div className="card-body" id="cardbod">
            <Link to={`/item/${item.id}`}>{item.name}</Link>
            </div>
            </div>
        </div>
    )
}
