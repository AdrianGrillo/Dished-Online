import React from 'react'
import CreateAccount from './CreateAccount'
import RecipeRoulette from './RecipeRoulette'
// import { useDispatch } from 'react-redux'
// import { handleRandomRecipes } from '../../actions/random-recipes'
// import RandomRecipe from './RandomRecipe'

// // url is a placeholder, the actual url will be whatever the endpoint is for the spoonacular API

// Commented out below is the original HomePage design, trying out something different after
// seeing mysaffronapp.com

export default function HomePage() {
    return (
        <div className='container column'>
            <CreateAccount /> 
            <RecipeRoulette />
        </div>
    )
}

