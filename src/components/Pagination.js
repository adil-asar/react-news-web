import React from 'react'
import './components-css/pagination.css'
import useProps from './../Context';

const Pagination = () => {

  const {page , nbPages ,   decrease_pagenumber, increase_pagenumber,} = useProps();

  return (
    <div className='pagination_css'>
      <div className='pagination_btn'>

<button
 className='page_btns'
 onClick={()=>decrease_pagenumber()}
 >
Prev
</button>

<span className='page_counter'>  {page + 1} of {nbPages} </span>

<button 
onClick={()=>increase_pagenumber()}
className='page_btns'
>
Next
</button>

      </div>
    </div>
  )
}

export default Pagination