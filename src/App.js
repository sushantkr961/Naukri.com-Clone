import AllRoutes from "./Components/AllRoutes";
import { UserAuthContextProvider } from "./Components/Context/UserAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <AllRoutes />
      </UserAuthContextProvider>
    </>
  );
}

export default App;
