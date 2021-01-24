import React, {useEffect, useState} from 'react';

import {Typography, Grid, Button} from '@material-ui/core';

import './FridgeDisplay.css';

import FoodCard from '../../food/FoodCard/FoodCard';

import colorList from '../../food/FoodList/color_list.json';
import {fetchFromUrl} from "../../../utils";
import axios from "axios";

const FridgeCategory = ({ fridgeList, text}) => {

    const [foodList, setFoodList] = useState([]);
    const [counters, setCounters] = useState( Array.from({ length: Object.keys(colorList).length}, (v, n) => { return { val: 0 } }));

    useEffect(() => {
        fetchFromUrl('foods', setFoodList);
    }, []);

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

    const addFoodToFridge = () => {
        const result = []
        counters.forEach((counter, idx) => {
            if(counter.val !== 0) {
                const date = new Date()
                const currentDate = new Date().toLocaleDateString()
                const { name, days } = foodList[idx];
                date.setDate(date.getDate() + parseInt(days));
                const quantity = counters[idx].val;
                const info = {
                    name,
                    products: [{
                        insertionDate: currentDate,
                        peremptionDate: date.toLocaleDateString(),
                        quantity
                    }]
                };
                result.push(info);
            }
        });

        axios.post('http://localhost:8080/fridge/addition', result);
    }


    return fridgeList.length ? ( <>
        <Typography className='fridge-main-compo__label' variant='h4'>
            { text }
        </Typography>
        <Grid container justify='center'
            alignItems='center'>
            {   // TODO -> improve those nested loops
                fridgeList.map(food => {
                    const { name, products } = food;
                    const restructuredFood = products.map(product => { return {name, ...product} });
                    const x = restructuredFood.flat();
                    return x;
                }).map((food_, idx_) => {
                    return food_.map(f => {
                        const { name, insertionDate, quantity } = f;
                    return (
                        <Grid key={ idx_ } item >
                            <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}/>
                        </Grid>); 
                    })
                    
                        
                })
            }
        </Grid>
    </>) : <></>;

};

export default FridgeCategory;