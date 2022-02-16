import React from "react";
import "./Recipes.css"

const Recipes = ({title, calories, image, cuisineType, dishType, ingredients, link, source})=>{

    return(
        <div className="recipes">
          
            <h2 className="title" >{title}</h2>
            <a target="_blank" href={image} rel="noreferrer"><img src = {image} alt={title} title={title}/></a>
            <hr/>
      
            <h5 className="text-capitalize">Cuisine type: {cuisineType}</h5>
            <h5 className="text-capitalize">{dishType}</h5>
            <h6 className="text-capitalize" title="check out the recipe">Source: <a href= {link} target= "_blank"  rel="noreferrer">{source}</a></h6>
     
            <hr/>
      
            <h6>Ingredients</h6>           
            <ul>
                {ingredients.map((ingredient, index) =>(
                    <li  className="ingredient" key={index}>{ingredient.text}</li>
                ))}
            </ul>            <hr/>
            <p className="text-danger font-weight-bold">calories: {Math.round(calories)}</p>
            
         </div>

        
    )
}
export default Recipes;