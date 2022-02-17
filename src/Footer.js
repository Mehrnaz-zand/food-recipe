import React from "react";
import "./Footer.css";

const Footer = ()=>{
    return (
        <p className="Footer"> 👩🏽‍🍳 This website is coded by 
            <a href="https://www.mehrnazzand.com/" target="_blank"
             rel="noreferrer" title="Mehrnaz's Website"> Mehrnaz Zand</a>
            , and it is
            <a href="https://github.com/Mehrnaz-zand/food-recipe" target="_blank" 
            rel="noreferrer" title="Mehrnaz's GitHub"> open-sourced</a>
        </p>
    )
}
export default Footer;