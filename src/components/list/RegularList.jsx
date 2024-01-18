export const RegularList=({item,sourceName,ItemComponent})=>{
    return(
        <>
        {
            item.map((item,i) => <ItemComponent key={i} {...{ [sourceName]: item}} />)
        }
        </>
    )
}