import React from "react";
import "../json/jsonFile.json";

function Contact() {
    const testJson = require("../json/jsonFile.json")
    return(
        <div>
            
            
            <div> מנהל המועדון: {testJson[0].Manager}</div>
            <div>טלפון : {testJson[0].Phone}</div>
            <div>מייל: {testJson[0].Email}</div>

        </div>
        
        
    ); 

    
}


export default Contact;
