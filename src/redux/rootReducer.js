import { combineReducers } from 'redux';
import learnerReducer from './reducers/learner.reducer';

const rootReducer = combineReducers({
    learnerState: learnerReducer
});

export default rootReducer;