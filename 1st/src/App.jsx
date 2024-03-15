import Ingredients from "./components/ingredients";
import IngredientsInfoHelper from "./components/ingredients-info-helper";

function App() {
  return (
    <>
      <Ingredients ingredientsHeaderText={<IngredientsInfoHelper />} />
    </>
  );
}

export default App;
