import store from './store/store';
import addIngredient from './actions/ingredients';
import addRecipe from './actions/recipes';

window.store = store;
store.dispatch(addIngredient('Omelette', 'Eggs', 3));
store.dispatch(addRecipe('Pancake'));

// - LOG
console.log(store.getState());
store.subscribe(() => console.log("Store changed"));
store.dispatch({ type: 'ACTION' });
