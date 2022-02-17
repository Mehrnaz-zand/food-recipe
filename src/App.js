import './App.css';
import React, { useEffect, useRef, useState} from 'react';
import Recipes from './Recipes';




const App = ()=> {

  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");
  const tempQuery = useRef();

  useEffect(()=>{
 tempQuery.current();
  }, [query]);

    const appId="4257774f";
    const appKey= "5943314524ba8ccc07fb748900635678";
    const apiUrl=`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  


  const getRecipes =async ()=>{
    const response = await fetch(apiUrl).catch(err=>alert(err));
    const data = await response.json();
    if (data.more===true){
      console.log(data);
      setRecipes(data.hits);

   } else{
     alert("Oops! Please try again!");
   }
  }
  tempQuery.current= getRecipes;

   const updateSearch = e=>{
     setSearch(e.target.value);
   
   }
   

   const handleSubmit = e=>{
     e.preventDefault();
     setQuery(search);
     getRecipes();
   

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
      className="button"  >
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

