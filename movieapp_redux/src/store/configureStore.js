import {createStore , combineReducers} from 'redux'
import movieReducer from '../reducers/movieReducers'

export default function configureStore(){
    const data = JSON.parse(localStorage.getItem('movieList'))
    
    const store = createStore(combineReducers({
        movie : movieReducer
    }), data)
    return store 
}
