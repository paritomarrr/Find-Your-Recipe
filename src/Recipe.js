import React from 'react'
 // recipe items
const Recipe = ({name, ingredients, img}) => {
    return (
        <div className="flex-box">
        <div className="recipe-box">
            <h1 className="recipe-title">{name}</h1>
            <ol className="recipe-steps">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className="item-img" src={img} alt="" />
        </div>
        </div>
    )
}

export default Recipe
