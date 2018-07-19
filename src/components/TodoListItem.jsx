import React from 'react';

class TodoListItem extends React.Component {

    render() {
        return (
            <li> 
                <span style={{textDecoration: this.props.todo.done ? "line-through": "none"}} >
                    {this.props.todo.name} 
                </span>
                <a href="#" onClick={this.props.onSwitchStatus}>
                        {this.props.todo.done ? 'Mark as undone' : 'Mark as done' }
                </a>
            </li>
    )}

}

export default TodoListItem;