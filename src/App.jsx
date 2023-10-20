import { useEffect, useState } from "react";
import { getUserInfo } from "./services/user";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { UserProvider, UserContext } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <main className="container">
        <div className="github-user-search">
          <Toolbar title="devfinder" />
          <SearchBar />
          <ProfileCard />
        </div>
      </main>
    </UserProvider>
  );
}

export default App;
