import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            todos: []
        }
    }

    switchStatus(todo) {
        let todos = [...this.state.todos];
        let rtodo = todos.find(lTodo => lTodo.id === todo.id);
        rtodo.done = !rtodo.done;
        this.setState(todos);
    }

    handleAddTodo(todoName) {
        this.setState({
            todos: [...this.state.todos, {id: this.state.todos.length, name: todoName, done: false}]
        })
    }

    render() {
        return (
            <div>
                <TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
                <ul>
                    { this.state.todos
                        .map(todo => 
                            <TodoListItem 
                            todo={todo} 
                            onSwitchStatus={this.switchStatus.bind(this, todo)}/>
                        ) 
                    }
                </ul>
            </div>
        );
    }

}

export default TodoList;