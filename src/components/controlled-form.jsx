import { useEffect, useState } from "react";

export const ControlledForm = () =>{

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [error, setError] = useState('');

    useEffect(()=>{
        if(name.length<1){
            setError('name can not be empty');
        }
    },[name])

    return(
        <form>
            {error && <p>{error}</p>}
            <input name="name" type="text" placeholder="enter your name" value={name} onChange={ e => setName(e.target.value)}/><br />
            <input name="age" type="number" placeholder="enter your age" value={age} onChange={ e => setAge(e.target.value)}/><br/>
            <button>Submit</button>
        </form>
    );
}