import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import Login from './components/Login/Login'
import useToken from './hooks/useToken'

function App() {

  const {token, setToken} = useToken()

  if (!token) {
    return <Login setToken={setToken}/>
  }

  const logout = () => {
    setToken(null)
  }

  return (
    <div className='App'>
      <h1>Application</h1>
      <button onClick={logout}>logout</button>
      <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/preferences' element={<Preferences />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
