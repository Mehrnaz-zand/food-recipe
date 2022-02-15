import React from "react";
import "./Recipes.css"

const Recipes = ({title, calories, image, cuisineType, dishType, ingredients, link, source})=>{

    return(
        <div className="recipes">
          
            <h1 className="title" >{title}</h1>
            <h2>{cuisineType}</h2>
            <h3>{dishType}</h3>
            <h4>Source: <a href= {link} target= "_blank"  rel="noreferrer">{source}</a></h4>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>calories :{Math.round(calories)}</p>
            <img src = {image} alt=""/>
         </div>

        
    )
}
export default Recipes;