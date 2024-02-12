// import { GreenButton, RedButton } from "./components/composition";
import { ParentComponent } from "./components/parent";
import { SmallRedButton, RedButton } from "./components/partial";
import { RecursiveComponent } from "./components/recursive";
import mitt from "mitt";

export const emitter = mitt();

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
    {/* // recursive component
    <RecursiveComponent data={myNestedObject}/>  */}

   {/* //composition component 
    <RedButton text={'Danger'}/>
    <GreenButton text={'Success'} /> */}

    {/* // Partial component */}
    {/* <RedButton text={'I am red button'}/>
    <SmallRedButton text={'I am small red button'}/> */}


    <ParentComponent/>
    </>
    
  );
}

export default App;
