import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Banner from './banner';
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
        <Navbar />
        <Banner />
        <Footer />
      </div>

    </>
  )
}

export default App;
