import { useEffect, useState } from 'react'
import { getUserInfo } from './services/user';
import { ProfileCard } from './components/ProfileCard';
import { Toolbar } from './components/Toolbar';
import { SearchBar } from './components/SearchBar';
import './App.css'

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserInfo('Godm0de').then(setUser);
  }, [])
  return (
    <main className='container'>
      <Toolbar title="devfinder" />
      <SearchBar />
      <ProfileCard />
    </main>
  )
}

export default App
