import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="container">
            <div className="title">
           <h1>{title}</h1>
           <p>{calories}</p></div>
           <div className="left">
           <ol>
               {ingredients.map(ingredient => (
                   <li>{ingredient.text}</li>
               ))}
           </ol></div>
           <div className="right">
    
        <img src={image} alt = ""/> </div>
        
        </div>
    )
}
export default Recipe;
