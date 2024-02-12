import axios from "axios";
import { useState, useEffect } from "react"

export const useUser = (userId) =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        ( async()=>{
            const res = await axios.get(`http://localhost:9090/users/${userId}`);
            setUser(res.data)
        })()
    },[userId]);
    return user;
}