const initalState=[
    
        {id:1,text:'learn React',completed:true},
        {id:2,text:'learn Redux',completed:false,color:'red'},
        {id:3,text:'learn Redux Toolkit',completed:false,color:"blue"}
    
]

function nextTodoId(todos=[]) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initalState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            
            return [
                ...state,
                {
                    id:nextTodoId(state),
                    text:action.payload,
                    completed:false,
                }
            ]
        }
        case 'todos/todoToggled': {
            return state.map(todo=>{
                if(todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        case'todos/colorSelected':{
            return state.map(todo=>{
                if(todo.id !== action.payload.todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: action.payload.color
                }
            })
        }
        case'todos/todoDeleted': {
            return state.filter(todo => todo.id !== action.payload) 
        }
        case'todos/allCompleted': {
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        }
        case'todos/completedCleared': {
            return state.filter(todo => !todo.completed)
        }
        default:
            return state
    }
}