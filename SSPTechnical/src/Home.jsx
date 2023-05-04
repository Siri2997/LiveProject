import React from "react";
import web from "../src/Images/Home.jpg"
import Common from "./common";

const Home = () => {
    return (
<>
<Common 
name ="Grow your business with" 
imgsrc={web} 
visit='/services' 
btname='Get Started'

/>
 </>
    );
};

export default Home;