import axios from "axios";
import { useState, useEffect } from "react"

export const useResource = (resourceUrl) =>{
    const [resource, setResource] = useState(null);

    useEffect(()=>{
        ( async()=>{
            const res = await axios.get(resourceUrl);
            setResource(res.data)
        })()
    },[resourceUrl]);
    return resource;
}