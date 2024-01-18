export const NumberedList=({item,sourceName,ItemComponent})=>{
    return(
        <>
        {item.map((item,i) => 
            <>
            <h3>{i+1}</h3>
            <ItemComponent key={i} {...{ [sourceName]: item}} />
            </>
        )}
        </>
    )
}