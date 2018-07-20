
import React from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            recipes: [],
            recipeFormVisibility: false
        }
    }

    handleRecipeFormVisibility() {
        this.setState({
            recipeFormVisibility: true
        })
    }

    recipeFormSubmitted(value) {
        const newRecipe = Object.assign({recipeId: this.state.recipes.length}, value)
        const newRecipes = [...this.state.recipes, newRecipe];
        this.setState({
            recipes: newRecipes
        });
        console.log({
            recipes: newRecipes
        })
    }

    render() {
        const {recipeFormVisibility, recipes} = this.state;
        return (
            <div className="container" style={{padding: "25px 45px 0 0"}}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <button type="button" onClick={this.handleRecipeFormVisibility.bind(this)} className="btn btn-secondary">Create new Recipe</button>
                        </div>
                        <div className="row" style={{padding: "10px"}}>
                            <RecipeList recipes={recipes}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        {recipeFormVisibility ? <RecipeForm onRecipeFormSubmit={this.recipeFormSubmitted.bind(this)} /> : <span></span>}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;