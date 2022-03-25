import React from "react";
import './header.styles.css';

const Header = ({day, workout}) => (
    
    <div className="header">
        <h2>Hello {day}, It is {workout} day</h2>
    </div>
);
export default Header;