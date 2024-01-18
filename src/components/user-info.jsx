export const UserInfo= ({user}) =>{
    const {name, age, country, books}= user || {};
    return user ? (
        <>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <h3>Books:</h3>
        <ul>
            {books.map(book => <li key={book}>{book}</li>)}
        </ul>
        </>
    ):(
        <h2>Loading...</h2>
    )
       
}