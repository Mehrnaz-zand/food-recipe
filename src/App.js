import './App.css';
import React, {useEffect, useState} from 'react';
import Recipes from './Recipes';


const App = ()=> {
  const [recipes, setRecpies] =useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState ("chicken");

  const appId="4257774f";
  const appKey= "5943314524ba8ccc07fb748900635678";
  const apiUrl=`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  

  useEffect(()=>{
    getRecpies();
  }, [query]);

 
  const getRecpies =async ()=>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    setRecpies(data.hits)
    console.log(data)
   }
   const updateSearch = e=>{
     setSearch(e.target.value);
   }
   const getSearch = e=>{
     e.preventDefault();
     setQuery(search);
     setSearch("");
   }

  return (
  <div className='App'>
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar" 
      value = {search}
      onChange = {updateSearch}/>
      <button type="submit" onClick = {getRecpies}>
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
  
  );
}

export default App;
