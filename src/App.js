import './App.css';
import React, {useEffect, useState} from 'react'
import Recipe from './Recipe';

function App() {
  //api fetch

  const app_id = '50f547f7'
  const app_key = 'eece7a5e351a07ab9a92cfcc2f1438cb'

  //data fetch from api
  const [recipes, setRecipes] = useState([])
  //searching for item
  const [search, setSearch] = useState("")
  //adding item to link
  const [query, setQuery] = useState("burger")

  //rendering items everytime user hits the search btn
  useEffect(() => {
  getRecipes()
  }, [query])


  //api fetch function
   const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
   const data = await response.json()
   setRecipes(data.hits)
 }


 const changeHandler = e => {
   setSearch(e.target.value)
 }

 //prevent from rendering after entering every letter
 const searchHandler = e => {
   e.preventDefault()
   setQuery(search)
 }


  return (
    <div className="App">
      <form className="search-form" onSubmit={searchHandler} >
        <input className="input-search" type="text" value={search} onChange={changeHandler} />
        <button type="submit">Find Your Food</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        name={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        img={recipe.recipe.image}
        />
      ))}</div>
    </div>
  );
}

export default App;
