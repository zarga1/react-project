import React from 'react';

const INITIAL_STATE = {
    recipeName: '',
    ingredients: '',
    instructions: ''
}

class RecipeForm extends React.Component {

    constructor() {
        super();
        this.state = INITIAL_STATE;
    }

    handleNameChange(event) {
        this.setState({recipeName: event.target.value});
    }

    handleIngredientsChange(event) {
        this.setState({ingredients: event.target.value});
    }

    handleInstructionsChange(event) {
        this.setState({instructions: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const {recipeName, ingredients, instructions} = this.state;
        this.props.onRecipeFormSubmit({recipeName, ingredients, instructions});
        this.setState(INITIAL_STATE);
    }

    render() {
        const {recipeName, ingredients, instructions} = this.state;
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="recipeNameInput">Recipe Name</label>
                    <input type="text" className="form-control" id="recipeNameInput" placeholder="Pizza,..."
                    value={recipeName} onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredientsInput">Ingredients</label>
                    <textarea className="form-control" id="ingredientsInput" rows="6" 
                    value={ingredients} onChange={this.handleIngredientsChange.bind(this)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="instructionsInput">Instructions</label>
                    <textarea className="form-control" id="instructionsInput" rows="6" 
                    value={instructions} onChange={this.handleInstructionsChange.bind(this)}></textarea>
                </div>

                <input type="submit" className="btn btn-success"/>
            </form>
        );
    }

}

export default RecipeForm;