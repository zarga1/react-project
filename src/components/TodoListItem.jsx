import React from 'react';

class TodoListItem extends React.Component {

    render() {
        return <li> {this.props.todo.name} <a href="#" onClick="this.propos.onSwitchStatus">{this.props.todo.status==0 ? 'Mark as done' : 'Mark as undone'}</a></li>
    }

}

export default TodoListItem;