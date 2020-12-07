import React, { useState, useEffect } from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import './FridgeMainCompo.css';

import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';
import FoodCard from '../../food/FoodCard/FoodCard';
import colorList from '../../food/FoodList/color_list.json';

import { fetchFromUrl } from 'utils'; 

const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState({});
    const [counters, setCounters] = useState( Array.from({ length: Object.keys(colorList).length}, (v, n) => { return { val: 0 } }));

    const handlePlus = (idx) => {
		const newArray = [...counters];
		newArray[idx].val += 1;
		setCounters(newArray);
	};

    const handleMinus = (idx) => {
		if(counters[idx].val !== 0){
			const newArray = [...counters];
			newArray[idx].val -= 1;
			setCounters(newArray);
		}
	};

    const textFromKey = {
        'TWO_DAYS': 'deux jours',
        'FIVE_DAYS': 'cinq jours',
        'SEVEN_DAYS': 'sept jours',
        'FORTEEN_DAYS': 'quatorze jours',
        'EXPIRED': 'Produits périmés',
        'OTHER': 'plus de quatorze jours'
    };

    useEffect(() => {
        fetchFromUrl('alerts', setFridgeList);
    }, []);

    // const delteFromFridge = () => {
    //     const result = []
    //     counters.forEach((counter, idx) => {
    //         if(counter.val !== 0) {
    //             const { nom, }
    //             const info = {
    //                 nom: fridgeList[idx].nom,
    //                 dateAjout: 
    //             }
    //         }
    //     })
    // }

    return (
        <>
            <Typography variant="h2" className='label' > Frigo de l'utilisateur </Typography>
            <Container className="container">
                <Grid >{
                    Object.keys(fridgeList).map((key, idx) => {
                        return fridgeList[key].length ? (
                            <div key={ idx }>
                                <Typography className='label' variant="h4">{ key === 'EXPIRED' ? textFromKey[key] : `Produits à manger au plus tard dans ${textFromKey[key]}`}</Typography>
                                <Grid container justify="center"
                                    alignItems='center'>
                                    {
                                        fridgeList[key].map(food => {
                                            const { name, products } = food;
                                            const restructuredFood = products.map(product => { return {name, ...product} })
                                            return restructuredFood.flat();
                                        }).map((food_, idx_) => {
                                            const { name, insertionDate, quantity } = food_[0];
                                            return (
                                            <Grid
                                                key={ idx_ }
                                                item
                                            >
                                                <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}/>

                                            </Grid>); 
                                        })
                                    }
                                </Grid>
                            </div>
                        ) : '';
                    })
                }</Grid>
            </Container>
        </>
    );
}

export default DisplayFridge;