
import './App.css';
import recipes from "./recipes.json";
import { Recipes } from './Recipes/Recipes';

function App() {
  console.log(recipes);
  
  return (
    <div className="App">
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
