import React from "react";
import Header from "../components/header.component";
import Body from "../components/body.component";
const HomePage = ({day,workout }) =>{
    return(
        <div className="homepage">
            <Header day={day} workout={ workout }/>
            
            <Body workout ={workout}/>
            
        </div>
    );
}
export default HomePage;