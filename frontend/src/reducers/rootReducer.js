import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { statusReducer} from './statusReducer';

export const rootReducer = combineReducers({
    counterReducer,
    statusReducer
});
