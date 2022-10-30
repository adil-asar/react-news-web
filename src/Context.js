
import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const props_context = createContext();


const initialStage = {
  query: '',
  nbPages: 0,
  page: 0,
  hits: [],
  loading: true,
}

let API = 'http://hn.algolia.com/api/v1/search?'


const Props_provider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialStage)


  // search news function

  const searchNews = (searchPost) => {
dispatch({
  type:'SEARCH',
  payload : searchPost, 
})
  }


  // useEffect hook for call api fetching function

  useEffect(() => {
    fetch_data(`${API}query=${state.query}&page=${state.page}`)
  }, [state.query , state.page]);

  // delete a news post

  const remove_post = (post_id) => {
    dispatch({type:'delete_post', payload : post_id });
  }

  // fuction for fetching api data

  const fetch_data = async (url) => {

    dispatch({ type: 'load' })

    try {
      const api_key = await fetch(url)
      const res = await api_key.json()
      console.log(res);
      state.loading = false
      dispatch({
        type: 'fetching',
        payload: {
          hits: res.hits,
          nbPages: res.nbPages
        }
      })
    }
    catch (error) {
      console.log(error);
    }

  }
  
  //  pagination prevoius page 

 const decrease_pagenumber = () => {
dispatch({type:'PREVIOUS'})
 }

//   pagination next page

const increase_pagenumber = () => {
  dispatch({type:'NEXT'})
}


return <props_context.Provider value={{ ...state,
  remove_post,
  searchNews,
  decrease_pagenumber,
  increase_pagenumber,
 }}> {children}  </props_context.Provider>

}

// custom hooks

const useProps = () => {
  return useContext(props_context);
}


export default useProps;
export const Provider = Props_provider;

