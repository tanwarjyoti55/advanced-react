
import { Modal } from "./components/Modal";
import { LargeBookListItems } from "./components/book/LargeListItems";
import { books } from "./data/book";

function App() {
  return (
    <>
    <Modal>
      <LargeBookListItems book={books[0]}/>
    </Modal>
    </>
    
  );
}

export default App;
