
import { SplitScreen } from './components/split-screen';

const LeftSideComp=({title})=>{
  return <h2 style={{backgroundColor:'crimson'}}>{title}</h2>
}
const RightSideComp=({title})=>{
  return <h2 style={{backgroundColor:'burlywood'}}>{title}</h2>
}

function App() {
  return (
    
    <SplitScreen leftSideWidth={1} rightSideWidth={3}>
      <LeftSideComp title='Left'/>
      <RightSideComp title='Right'/>
    </SplitScreen>

  );
}

export default App;
