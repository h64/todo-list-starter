import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = props => {
    const displayItems = props.items.map((item, i) => {
        return <TodoListItem item={item} key={i} />
    })

    return (
        <div>
            <h3>My Current List</h3>
            <ul>
                {displayItems}
            </ul>
        </div>
    )
}

export default TodoList;