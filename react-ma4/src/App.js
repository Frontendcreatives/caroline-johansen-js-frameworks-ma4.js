import React from "react";
import './App.css';
import Heading from "./components/layout/Heading";
import RecipeList from "./components/recipe/RecipeList";


function App() {
  return (
    <div className="App">
       <Heading title="RecipePuppy" />
        <RecipeList/>
    </div>
  );
}

export default App;
