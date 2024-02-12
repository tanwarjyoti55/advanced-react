import axios from "axios";
import { useState, useEffect } from "react"

export const useCurrentUser = () =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        ( async()=>{
            const res = await axios.get('http://localhost:9090/current-user');
            setUser(res.data)
        })()
    },[]);
    return user;
}