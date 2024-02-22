import { useState } from 'react'

import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Home from './Pages/Home'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='p-4 h-screen flex items-center justify-center'>
<Home/>
</div>
    </>
  )
}

export default App
