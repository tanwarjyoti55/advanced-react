import axios from "axios";
import { useState, useEffect } from "react"

export const includeUser = (Component, userId) => {
    return (props) => {
        const [user, setUser] = useState(null);
        useEffect(()=>{
            ( async () => {
                const response= await axios.get(`http://localhost:9090/users/${userId}`);
            setUser(response.data)
            })()
        },[]);

        return <Component {...props} user={user} />
    }
}