import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./components/login/Login";
import { LogoutButton } from "./components/logout/Logout";
import { Profile } from "./components/profile/Profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;

