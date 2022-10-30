

const reducer = (state,action) => {

    switch (action.type) {
        case 'fetching':
            return {
                ...state,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
                loading:false
            }
            case 'load' : 
            return {
                ...state,
                loading:true,
            }

            case 'delete_post' : 
            return {
                ...state,
                hits: state.hits.filter((cur_post)=> cur_post.objectID !== action.payload)
            }
            case 'SEARCH' : 
            return {
                ...state,
                query: action.payload
            }

            case 'NEXT' :
              let page_inc = state.page + 1;
              if (page_inc >= state.nbPages) {
                page_inc = 0;
              }
                return {
                    ...state,
                    page:page_inc
                }

                case 'PREVIOUS' :
                    let page_num = state.page - 1;

                    if(page_num <= 0){
                      page_num = 0 ;
                    }
                    
                return {
                    ...state,
                    page:page_num
                  
                }

         default :
          
       
    }

return state;
}
export default reducer;