import React from "react";
import './body.styles.css';

import data from "../data";
const Body = ({ workout }) => (
    <div className="holder">
        {
            data[`${workout}`]?
                data[`${workout}`]?.map(item => (
                    <div key={item.name} className="component">
                        <div className="video-section">
                            <img src={require(`./images/${item.demoimg}`)} alt={item.name} />
                            <h1>{workout}</h1>
                        </div> 
                        <h2>{item.name}</h2>
                        <h3>{item.reps}</h3>
                    </div>
                )) : <h1 style={{ color: 'white', textAlign: 'center' }} >Data not found</h1>
        }
    </div>
);
export default Body;