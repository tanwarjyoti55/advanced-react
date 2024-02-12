import { useCurrentUser } from "./current-user.hook";
import axios from "axios";
import { useDataSource } from "./data-source.hook";
import { useResource } from "./resource.hook";
import { useUser } from "./user.hook";

const fetchDataFromServer = resourceUrl => {
    async () => {
        const res = await axios.get(resourceUrl);
        return res.data;
    }
}

const getFromLocalStorage = (key) => () =>{
    return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
    // const user= useCurrentUser();
    // const user = useUser(userId)
    // const user = useResource(`http://localhost:9090/users/${userId}`);
    const user = useDataSource(fetchDataFromServer(`http://localhost:9090/users/${userId}`))
    const message = useDataSource(getFromLocalStorage('msg'));
    const { name, age, country, books } = user || {};
    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h3>Books:</h3>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
            <p>{message}</p>
        </>
    ) : (
        <h2>Loading...</h2>
    )

}