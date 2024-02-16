import { useRef, useState } from "react";

export const useUrl = (defaultUrl: string)=>{
  const [url, setUrl] = useState(defaultUrl)
  return [url, setUrl] as const;
}

function App() {
//  const inputRef= useRef<HTMLInputElement>(null);
//  const mutableRefValue = useRef<number | undefined>();

//  mutableRefValue.current=20;

//  return(
//   <>
//   <input ref={inputRef}/>
//   </>
//  );

const [url, setUrl] = useUrl('google.com');

return <></>

}

export default App;
