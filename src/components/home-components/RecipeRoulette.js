import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleRandomRecipes } from '../../actions/random-recipes'


// Recipe Roulette idea: This component will display 10 cards each containing a random recipe. If the user doesn't like any of the recipes on the
// recipes on the cards, then some animation will trigger and continue until 10 new recipes have been received from the API and can be displayed
// on the page.

export default function RecipeRoulette() {
    const dispatch = useDispatch()
    const randomRecipes = useSelector(state => state.randomRecipes)

    React.useEffect(() => {
        dispatch(handleRandomRecipes('https://api.spoonacular.com/recipes/random', 10))
    }, [dispatch])

    return (
        <div className='center recipe-roulette'>
            <div>
                <h1 className='title'>Recipe Roulette</h1>
                <h2 className='title'>Nothing piquing your interest? Take it for a <button className='button'>spin!</button></h2>

                <div className='recipe-roulette-cards-container'>
                    {randomRecipes.map((recipe, index) => (
                        <li key={index} className='recipe-roulette-card'>
                            {recipe.readyInMinutes}
                        </li>
                    ))}
                </div>
            </div>

            {/* <div>
                {randomRecipes.map((recipe, index) => (
                    <li key={index}>
                        {recipe.vegan}
                    </li>
                ))}
            </div> */}
        </div>
    )
}
