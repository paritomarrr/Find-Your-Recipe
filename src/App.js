import './App.css';
import React, {useEffect, useState} from 'react'
import Recipe from './Recipe';

function App() {
  //api fetch

  const app_id = '50f547f7'
  const app_key = 'eece7a5e351a07ab9a92cfcc2f1438cb'

  
 


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
