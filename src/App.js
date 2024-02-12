import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      {/* <UserInfo /> */}

      <UserInfo userId={'1'} />
      <UserInfo userId={'3'} />
      <BookInfo bookId={'5'} />
    </>
    
  );
}

export default App;
