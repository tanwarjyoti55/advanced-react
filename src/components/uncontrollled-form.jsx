import React from "react";

export const UncontrolledForm = ()=>{

    const nameRef = React.createRef();
    const ageRef = React.createRef();

    const submitFormHandler = (e)=>{
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <input name="name" type="text" placeholder="enter your name" ref={nameRef}/><br />
            <input name="age" type="number" placeholder="enter your age" ref={ageRef}/><br/>
            <input type="submit" value='Submit' />
        </form>
    )
}