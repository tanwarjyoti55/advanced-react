import { ControlledForm } from "./components/controlled-form";
import { UncontrolledForm } from "./components/uncontrollled-form";
import { ControlledModal } from "./components/controlledModal";
import { useState } from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";


const StepOne = ({goNext})=> {
  return(
    <>
    <h1>Step #1</h1>
    <button onClick={goNext}>Go Next</button>
    </>
  )
};
const StepTwo = ({goNext})=>{
  return(
    <>
    <h1>Step #2</h1>
    <button onClick={goNext}>Go Next</button>
    </>
  )
};
const StepThree = ({goNext})=> {
  return(
    <>
    <h1>Step #3</h1>
    <button onClick={goNext}>Go Next</button>
    </>
  )
};

function App() {
  const [ showDisplay, setShowDisplay]= useState(false)
  return (
    <>
    {/* <UncontrolledForm />

    <ControlledForm /> */}

     {/* // controlled modal

    <ControlledModal showDisplay={showDisplay} onClose={() => setShowDisplay(false)}>
      <h1>Hello, I am a Modal</h1>
    </ControlledModal>
    <button onClick={()=> setShowDisplay(!showDisplay)}>
      {showDisplay ? 'Hide Modal': 'Display Modal'}</button> */}

    <UncontrolledFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>

    </>
    
  );
}

export default App;
