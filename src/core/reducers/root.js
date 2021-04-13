import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { studentsReducer } from './students';
import { specialitiesReducer } from './specialities';
import { notificationReducer } from './notification';
import { studentsPlansReducer } from './studentsPlans';

export const rootReducer = combineReducers({
  authState: authReducer,
  studentsState: studentsReducer,
  studentsPlansState: studentsPlansReducer,
  specialitiesState: specialitiesReducer,
  notificationState: notificationReducer,
});
