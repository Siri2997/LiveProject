import React from "react";
import web from "../src/Images/about.jpg"

import Common from "./common";
const About = () => {
    return (
<>
<Common 
name ="Welcome to About page" 
imgsrc={web} 
visit='/contact' 
btname='Contact Now'

/>
 </>
    );
};

export default About;