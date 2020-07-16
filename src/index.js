import React from 'react';
import { rendor } from 'react-dom';
import Menu from './components/Menu';
import data from './data/recipes.json';

rendor(<Menu recipes={data} />, document.getElementById('root'));
