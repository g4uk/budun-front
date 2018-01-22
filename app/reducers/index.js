import { combineReducers } from 'redux';

import AppReducers from './app';
import TasksReducers from './tasks';
import VendorsReducers from './vendors';

const allReducers = combineReducers({
    app: AppReducers,
    tasks: TasksReducers,
    vendors: VendorsReducers
});

export default allReducers;