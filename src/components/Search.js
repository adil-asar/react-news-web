import React from 'react'
import './components-css/search.css'
import useProps from '../Context.js'




const Search = () => {

  const { query, searchNews } = useProps();


  return (
    <div 
    className='search_main_div'>

      <h1>
       Tech News Website 
      </h1>

      <form
        action=""
        className='form'>

        <input
          type="text"
          className='input_css'
          placeholder='Search News'
          value={query}
          onChange={(e) => searchNews(e.target.value)}

        />
      </form>

    </div>
  )
}

export default Search