import { useEffect, useState } from 'react'
import { getUserInfo } from './services/user';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { Toolbar } from './components/Toolbar';
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css'

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserInfo('Godm0de').then(setUser);
  }, [])
  return (
    <main className='container flex-layout'>
      <Toolbar title="devfinder" />
      <SearchBar />
      <ProfileCard user={user}/>
    </main>
  )
}

export default App
