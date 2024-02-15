import { includeUser } from "./components/include-user";
import { logProps } from "./components/log-props";
import { UserInfoFrom } from "./components/user-form";
import { UserInfo } from "./components/user-info";

// const UserInfoWrapper = logProps(UserInfo);

// const UserInfoWithLoader = includeUser(UserInfo,'3')

function App() {
  return (
    <>
      {/* <UserInfoWrapper test='test' b='I am be' c='23' /> */}
      {/* <UserInfoWithLoader /> */}

      <UserInfoFrom />
    </>
  );
}

export default App;
