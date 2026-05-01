import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';
import RecipeStore from "./store/RecipeStore";
import { createContext } from 'react';


interface State {
    store: Store
    recipestore: RecipeStore
}

const store = new Store()
const recipestore = new RecipeStore()

export const Context = createContext<State>({
  store, recipestore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{store, recipestore}}>
    <App/>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

