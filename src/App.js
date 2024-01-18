
import { LargeAuthorListItems } from "./components/author/LargeListItems";
import { SmallAuthorListItems } from "./components/author/SmallListItems";
import { LargeBookListItems } from "./components/book/LargeListItems";
import { SmallBookListItems } from "./components/book/SmallListItems";
import { NumberedList } from "./components/list/NumberedList";
import { RegularList } from "./components/list/RegularList";
import { authors } from "./data/author";
import { books } from "./data/book";

function App() {
  return (
    <>
  
    <RegularList item={authors} sourceName={'author'} ItemComponent={SmallAuthorListItems}/>
    <NumberedList item={authors} sourceName={'author'} ItemComponent={LargeAuthorListItems}/>

    <RegularList item={books} sourceName={'book'} ItemComponent={SmallBookListItems}/>
    <NumberedList item={books} sourceName={'book'} ItemComponent={LargeBookListItems}/>

    </>
    
  );
}

export default App;
