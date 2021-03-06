import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { catalogReducer } from './catalogReducer';
import { locationsReducer } from './locationReducer';
import { partnerReducer } from './partnerReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  location: locationsReducer,
  user: userReducer,
  parner: partnerReducer,
  catalog: catalogReducer,
});
