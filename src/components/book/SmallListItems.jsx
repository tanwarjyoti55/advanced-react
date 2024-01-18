export const SmallBookListItems = ({book}) => {
const { name, price } = book;
return <h3>{name} / {price}</h3>
}