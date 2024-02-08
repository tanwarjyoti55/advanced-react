import { ControlledForm } from "./components/controlled-form";
import { UncontrolledForm } from "./components/uncontrollled-form";
import { ControlledModal } from "./components/controlledModal";
import { useState } from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";


const StepOne = ({goNext})=> {
  return(
    <>
    <h1>Step #1: Enter your name:</h1>
    <button onClick={()=> goNext({name: 'MyName'})}>Next</button>
    </>
  )
};
const StepTwo = ({goNext})=>{
  return(
    <>
    <h1>Step #2: Enter your age:</h1>
    <button onClick={()=> goNext({age: 22})}>Next</button>
    </>
  )
};
const StepThree = ({goNext})=> {
  return(
    <>
    <h1>Step #3: Enter your country:</h1>
    <button onClick={()=> goNext({country: 'India'})}>Next</button>
    </>
  )
};

function App() {

  const[data, setData]= useState({});
  const [currentStepIndex, setCurrentStepIndex]= useState(0);

  const goNext=(dataFromStep)=>{
  
    setData({...data, ...dataFromStep});
    setCurrentStepIndex(currentStepIndex + 1)
    // setCurrentStepIndex(currentStepIndex+1)
}

  // const [ showDisplay, setShowDisplay]= useState(false)
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

      {/* //uncontrolled flow

    <UncontrolledFlow onDone={data =>{
      console.log(data);
      alert('You can do it the final step')
    }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow> */}


    <ControlledFlow
    currentIndex={currentStepIndex} 
    onNext={goNext}
  >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledFlow>

    </>
    
  );
}

export default App;
