import React from 'react'
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import Search from './components/Search';
import './index.css'

const App = () => {


  return (
    <div>
      <Search/>
      <Pagination/>
      <Posts/>
     
      
    </div>
  )
}

export default App