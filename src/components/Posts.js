import React from 'react'
import useProps from './../Context';
import './components-css/posts.css'

const Posts = () => {

  const { hits, loading,remove_post } = useProps();


  if (loading) {
    return (
      <div className='loading'>

<div className="loader spinner-border text-info" id='' role="status">
  <span className="visually-hidden">Loading...</span>
</div>

      </div>
    )
  }

  return (
    <div Name='news_feed'>

      {

        hits.map((post) => {
          const { author, title, num_comments, objectID, url } = post;
          return <div className='news_card' key={objectID}>
            <h2 className='title'> {title} </h2>
            <span> {author} </span> | <span> <strong> {num_comments} </strong> comments </span>
            <div className='news_buttons' >
              <a href={url} className='link_tag' target='blank'> Show More</a>
              <button className='bn29' onClick={()=>remove_post(objectID)}> Remove </button>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default Posts
