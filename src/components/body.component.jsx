import React from "react";
import './body.styles.css';

import data from "../data";
const Body = ({index, workout})=>(
    
        <div className="holder">
            {
                data[`${workout}`].map(item=>(
                    <div className="component">
                        <div className="video-section">
                            <img src={require(`./images/${item.demoimg}`)} alt={item.name}/>
                        </div>
                        <h2>{item.name}</h2>
                        <h3>{item.reps}</h3>
                    </div>
                    
                ))  
            }
        </div>
);
export default Body;