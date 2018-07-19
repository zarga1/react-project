import React from 'react';

class TodoForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.refs.todoName.value);
        this.refs.todoName.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="todoName"/>
                <input type="submit" />
            </form>
    )}

}

export default TodoForm;