import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PokeProvider } from './context/PokeContext'
import { useState } from 'react'
import Home from './views/Home'
import Finder from './views/Finder'
import Pokemon from './views/Pokemon'
import Error from './views/Error'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finder" element={<Finder />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </PokeProvider>
    </>
  )
}

export default App
