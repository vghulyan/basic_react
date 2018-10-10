import { combineReducers } from 'redux'
import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'

const compareApp = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});

export default compareApp
