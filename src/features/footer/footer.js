import React from 'react';
import { useSelector } from 'react-redux';
import{availableColors,capitalize} from '../filters/colors';
import { statusFilters } from '../filters/filterSlice';

const RemainingTodos = ({count})=>{
    const suffix = count === 1 ? '' : 's';
    return(
        <div className='todo-count'>
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

const StatusFilter=({value:status, onChange})=>{
    const renderedFilters=Object.keys(statusFilters).map((key)=>{
        const value= statusFilters[key];
        const handleClick=()=>{
            onChange(value);
        }
        const className = value === status ? 'selected' : '';
        return(
          <li key={value}>
            <button className={className} onClick={handleClick}>
                {key}
            </button>
          </li>
        )
    })
    return(
        <div className='filter statusFilters'>
            <h5>Filter by Status</h5>
            <ul>
                {renderedFilters}
            </ul>
        </div>
    )
}

const ColorFilter = ({value:color, onChange}) => {
    const renderedColors = availableColors.map((color) => {
        const checked= color.includes(color);
        const handleChange=()=>{
            const ChangeType=checked?'removed':'added';
            onChange({color, ChangeType});
        }
        return(
            <label key={color}>
                <input type="checkbox" name={color} checked={checked} onChange={handleChange} />
                <span className={`color-block`} style={{backgroundColor:color}}></span>
                {capitalize(color)}
            </label>
        )
    })
    return(
        <div className='filter colorFilter'>
            <h5>Filter by Color</h5>
            <form className='colorSelection'>
                {renderedColors}
            </form>
        </div>
    )
}

const Footer=()=>{
    const{status,colors}=useSelector(state=>state.filters);
    const todosRemaining=useSelector(state=>{
        const uncompletedTodos = state.todos.filter(todo => !todo.completed);
        return uncompletedTodos.length;
    })
    const onColorChange=(color, ChangeType)=>{
        console.log(`Color ${ChangeType}: ${color}`);
    }
    const onStatusChange=(status)=>{
        console.log(`Status changed to: ${status}`);
    }

    return(
        <footer className='footer'>
            <div className='actions'>
                <h5>Actions</h5>
                <button className='button'>Clear Completed</button>
                <button className='button'>Mark All completed</button>
            </div>
            <RemainingTodos count={todosRemaining} />
            <StatusFilter value={status} onChange={onStatusChange} />
            <ColorFilter value={colors} onChange={onColorChange} />
        </footer>
    )
}
export default Footer;