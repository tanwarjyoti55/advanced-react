export const BookInfo= ({book}) =>{
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