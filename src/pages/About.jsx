import React from "react";
import "../json/jsonFile.json";

function thisPage1() {
    const testJson = require("../json/jsonFile.json")
    return(
        <div>על המועדון: {testJson[0].About}</div>
        
    ); 
}


export default thisPage1;
