import * as api from '../../api'


//action creactors
export const getPosts = () => async (dispatch)=>{
    try {
        const { data } = await api.fetchPosts();
         
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

