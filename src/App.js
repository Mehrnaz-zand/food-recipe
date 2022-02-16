import './App.css';
import React, { useState} from 'react';
import Recipes from './Recipes';




const App = ()=> {
 
  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState("mango");

  const appId="4257774f";
    const appKey= "5943314524ba8ccc07fb748900635678";
    const apiUrl=`https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}`;




  const getRecipes =async ()=>{
    const response = await fetch(apiUrl).catch(err=>alert(err));
    const data = await response.json();
      if (data.more===false){
      alert("Oops! Please try again!")
    }else {
      setRecipes(data.hits)
      console.log(data);   


    }
   };
  
   
   const updateSearch = e=>{
     setSearch(e.target.value);
     
   }
   

   const handleSubmit = e=>{
     e.preventDefault();
    getRecipes();
    setSearch("");

    
   }
 
   

  return (
  <div className='App'>
    
    <form className="search-form" 
    onSubmit={handleSubmit}>
      <h1 > Search a recipe!</h1>
      <input type="search" 
      className="search-bar" 
      value = {search}
      
      onChange = {updateSearch}/>
      <button type="submit" 
      className="button" >
        Search
        </button>
    </form>

    {recipes.map((recipe, index) => (
     
      <Recipes 
      key =  {index}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      link= {recipe.recipe.url}
      cuisineType = {recipe.recipe.cuisineType}
      dishType = {recipe.recipe.dishType}
      source = {recipe.recipe.source}
      />
    
    ))}
   
   </div>
  );}

 
       


export default App;
