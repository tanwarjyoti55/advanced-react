import { CurrentUserLoader } from "./components/current-user-loader";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { BookInfo } from "./components/book-info";
import { UserLoader } from "./components/user-loader";
import { DataSource } from "./components/data-source";
import axios from "axios";
import { DataSourceWithRender } from "./components/data-source-with-render";

const getDataFromServer = async(url) =>{
  const response= await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = (key) => () =>{
  return localStorage.getItem(key);
}

const Message = ({msg}) => <h1>{msg}</h1>

function App() {
  return (
    <>
    {/* current-loader
   <CurrentUserLoader>
      <UserInfo />
   </CurrentUserLoader> */}

   {/* //user-loader
   <UserLoader userId={'3'}>
    <UserInfo />
   </UserLoader>
   <UserLoader userId={'2'}>
    <UserInfo />
   </UserLoader>
   <UserLoader userId={'1'}>
    <UserInfo />
   </UserLoader> */}

   {/* resource loader */}
   {/* <ResourceLoader resourceUrl={"http://localhost:9090/users/2"} resourceName={"user"}>
   <UserInfo />
   </ResourceLoader>
   <ResourceLoader resourceUrl={"http://localhost:9090/books/1"} resourceName={"book"}>
   <BookInfo/>
   </ResourceLoader> */}

   {/* data-source */}
   <DataSource getData={ () => (getDataFromServer('http://localhost:9090/users/3')) }
   resourceName={"user"}
   >
    <UserInfo />
   </DataSource>

   <DataSource getData={ () => (getDataFromLocalStorage('test')) }
   resourceName={"msg"}
   >
    <Message />
   </DataSource>

   {/* <DataSourceWithRender getData={ () => (getDataFromServer('http://localhost:9090/users/3')) }
   render={(resource) => <UserInfo user={resource} />}
   /> */}
   
    </>
    
  );
}

export default App;
