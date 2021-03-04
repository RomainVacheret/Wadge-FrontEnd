import React, { useEffect} from 'react';
import { Container, Select, InputLabel, TextField, Button, withStyles} from '@material-ui/core';
import { postFromUrl } from 'utils';
const FilterSelect = ({ setRecipeList }) => {
    
    const searchList = () => {
        let result = document.getElementById("food_list").value;
        result = result.split(",");
         postFromUrl('recipes/search', result, setRecipeList);
         
    }

    const handleChange = (event) => {
        postFromUrl('recipes', { 'selection': event.target.value }, setRecipeList);
    };


    useEffect(() => {
        postFromUrl('recipes', { 'selection': 'EVERYTHING' }, setRecipeList)
    }, []);
    
    const CustomButton = withStyles({
        root: {
            background: 'limegreen',
        '&:hover': {
            background: '#f19300',
        },
    }
    })(Button);

    return (
        <Container>
            <InputLabel htmlFor="age-native-simple">Filtrage</InputLabel>
            <Select native onChange={ handleChange } style = {{ color:  "#f19300" }}>
                <option value="EVERYTHING">Toutes les recettes</option>
                <option value="USING_FRIDGE">En fonction de mon frigo</option>
                <option value="BY_DIFFICULTY">En fonction de la difficulté</option>
                <option value="BY_RATING">En fonction de la note</option>
                <option value="FAVORITE">Mes favories</option>
            </Select>
            <form name="food_list" noValidate autoComplete="off">
                <TextField id="food_list" label="Liste d'ingrédients" variant="outlined" />
                <CustomButton
                 variant="contained"
                 className="button_foodlist"
                 onClick={ searchList }>Recherche sur Marmiton</CustomButton>
            </form>
            
        </Container>
        
    );
};

export default FilterSelect;