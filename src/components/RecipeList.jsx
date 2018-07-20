import * as React from 'react';
import PropTypes from 'prop-types';

const RecipeList = (props) => (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">RecipeName</th>
                </tr>
            </thead>
            <tbody>
                
                { props.recipes.map(recipe => {
                    <tr>
                        <td>{recipe.recipeId}</td>
                        <td>{recipe.recipeName}</td>
                    </tr>
                })}
            </tbody>
        </table>
);

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default RecipeList;