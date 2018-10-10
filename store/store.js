import { createStore } from 'redux';
import rootReducer from "../reducers/root";

const initialState = {
    recipes: [
        {
            name: 'Omlete'
        }
    ],
    ingredients: [
        {
            recipe: 'Omplete',
            name: 'Egg',
            quantity: 2
        }
    ]
};

const store = createStore(rootReducer, initialState);
export default store;
