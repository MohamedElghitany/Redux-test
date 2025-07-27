import React from 'react';
import TodoListItem from './TodoListItem';
import { shallowEqual, useSelector } from 'react-redux';

const selectTodosId = state => state.todos.map(todo => todo.id);
const TodoList=()=>{
    const todosIds = useSelector(selectTodosId,shallowEqual);
    
    const renderedListItems = todosIds.map((todoId) => {
        return (
            <TodoListItem key={todoId} id={todoId} />
        );
    })
    return <ul className='todo-list'>{renderedListItems}</ul>
}
export default TodoList;