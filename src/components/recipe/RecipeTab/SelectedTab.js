import  React,{ useState, useEffect } from 'react';
import '../RecipeList/RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from '../RecipeList/FilterSelect.js';
import {  fetchFromUrl} from 'utils';


const SelectedTab = ({tabSelected}) => {
    
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl(tabSelected, setRecipeList);
    }, []);
 
    useEffect(() => {
        fetchFromUrl(tabSelected, setRecipeList);
    },);
   
    return (
        <>
               <FilterSelect setRecipeList={setRecipeList} tabSelected={tabSelected}/>
               <div className='recipe__container'> {
               recipeList.map((recipe, idx) => 
                ( <RecipeCard recipe={ recipe } key={ idx } tabSelected={tabSelected} />
                )
             )
            } </div>
        </>
    );
}

export default SelectedTab ;