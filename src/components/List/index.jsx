import React from "react";
import "./List.css";

export const List = ({ name, description, category_id, subcategory_id, detail }) => {
    return (
        <div className="card cardList">
            <img src={detail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description} </p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item"> {category_id.name} </li>
                <li className="list-group-item"> {subcategory_id.name} </li>
            </ul> */}
            {/* <p className="card-text">{category_id.name}</p>
            <p className="card-text">{subcategory_id.name}</p> */}
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>

    );
};