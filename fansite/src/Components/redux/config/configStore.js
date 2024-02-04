import { createStore } from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;

//const rootReducer = combineReducers({ todos, auth }) === const todos = useSelector((state) => state.todos )
