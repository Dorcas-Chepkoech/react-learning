import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

const App = () => {
  const APP_ID = 'e84fac72'

  const APP_KEY = '8a19f01f4a7d17c0295a10e604161775'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
    // console.log('effect')
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        ></input>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
    </div>
  )
}

export default App
