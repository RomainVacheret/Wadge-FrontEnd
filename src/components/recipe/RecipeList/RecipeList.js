import React, { useState, useEffect } from 'react';
import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';
import {  fetchFromUrl} from 'utils';

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    },);
    useEffect(() => setRecipes([...recipeList]), [recipeList]);

   
    return (
        <>
               <FilterSelect setRecipeList={setRecipeList} tabSelected='recipes'/>
               <div className='recipe__container'> {
               recipes.map((recipe, idx) => 
                ( <RecipeCard recipe={ recipe } key={ idx } />
                )
             )
            } </div>
        </>
    );
}

export default RecipeList;
