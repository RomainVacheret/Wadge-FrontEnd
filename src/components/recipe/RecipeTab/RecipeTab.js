import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleIcon  from '@material-ui/icons/CheckCircle';
import LocalDiningIcon  from '@material-ui/icons/LocalDining';
import PropTypes from 'prop-types';
import SelectedTab from './SelectedTab.js';
import Paper from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RecipeList from '../RecipeList/RecipeList.js';
import './RecipeTab.css';

import React,{ useState} from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === 0 && (
        <RecipeList/>
      )}
      {value === 1 && (       
          <SelectedTab  tabSelected ="recipes/favorites" />               
      )}
       {value === 2 && (
         <SelectedTab  tabSelected ="recipes/doneRecipes"/>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function setPropsTab(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


const  RecipeTab=() =>{
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper position="center" color="green" className="recipe__tab">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className= "active_tabStyle"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <Tab icon={<LocalDiningIcon/>} label="Toutes Les Recettes" {...setPropsTab(0)}  
           />
          <Tab icon={<FavoriteIcon />} label="Recettes Favorites" {...setPropsTab(1)}   />
          <Tab icon={<CheckCircleIcon />}   label="Recettes Realisées"  {...setPropsTab(2)}  />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
   
      </TabPanel>
      <TabPanel value={value} index={2}>
      
      </TabPanel>
    </div>
  );
}

export default RecipeTab;