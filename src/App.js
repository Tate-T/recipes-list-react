
import recipes from "./recipes.json";
import { Recipes } from './components/Recipes/Recipes.jsx';
import { HeroOfTitle } from './components/HeroTitle/HeroTitle.jsx';

function App() {
  console.log(recipes);
  
  return (
    <div className="App">
      <HeroOfTitle/>
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
