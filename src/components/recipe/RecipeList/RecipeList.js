import React, { useState, useEffect } from 'react';
import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';
import {  fetchFromUrl} from 'utils';

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    },);
   
    return (
        <>
               <FilterSelect setRecipeList={setRecipeList} tabSelected='recipes'/>
               <div className='recipe__container'> {
              recipeList.map((recipe, idx) => 
                ( <RecipeCard recipe={ recipe } key={ idx } tabSelected='recipes' />
                )
             )
            } </div>
        </>
    );
}

export default RecipeList;
