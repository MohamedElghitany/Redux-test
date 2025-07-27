import { combineReducers } from "redux";
import todosReducer from "./features/todos/todoslice";
import filterReducer from "./features/filters/filterSlice";

const rootReducer =combineReducers({
    todos: todosReducer,
    filters: filterReducer
})

export default rootReducer;