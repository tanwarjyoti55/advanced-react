import { useResource } from "./resource.hook";

export const BookInfo= ({bookId}) =>{
    const book = useResource(`http://localhost:9090/books/${bookId}`);
    const {name, price, title, pages}= book || {};
    return book ?  ( 
    <>
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Title: {title}</p>
        <p>Number of pages: {pages}</p>
    </>
    ):(
        <h2>Loading...</h2>
    )    
}