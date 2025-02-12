import { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <img id='header-image' src="./hero.png" alt="Hero-banner" />
        <h1>Find <span className='text-gradient'>Movies</span> You &#39; ll Love</h1>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1 className='text-white'>{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App
