import Routes from "./routes";

import { UserContextProvider } from "./contexts/user";

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
