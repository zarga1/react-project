import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            todos: [
                {id: 1, name: 'Item 1', status: 0},
                {id: 2, name: 'Item 2', status: 1},
                {id: 3, name: 'Item 3', status: 0},
            ]
        }
    }

    switchStatus(todo) {
        let todos = [...this.state.todos];
        let rtodo = todos.find(lTodo => lTodo.id === todo.id);
        rtodo.status === 0 ? rtodo.status = 1 : rtodo.status = 0;
        this.setState(todos);
    }

    render() {
        return (
            <ul>
                { this.state.todos.map(todo => <TodoListItem todo={todo} onSwitchStatus={this.switchStatus.bind(this, todo)}/>) }
            </ul>
        );
    }

}

export default TodoList;