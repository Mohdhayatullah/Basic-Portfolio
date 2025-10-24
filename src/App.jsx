import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Project from './components/Project'
import Skill from './components/Skill'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    if(count === 7){
      setCount(0);
    }
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <Hero />
    </div>
    
      <h1>First time using Vite + React</h1>
      <h2 onChange={setCount}>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click here </button>

      <div>
      <Project />
      </div>

      <div>
        <Skill />
      </div>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default App
