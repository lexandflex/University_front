import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { studentsReducer } from './students';
import { specialitiesReducer } from './specialities';
import { notificationReducer } from './notification';
import { studentsPlansReducer } from './studentsPlans';
import { facultiesReducer } from './faculties';

export const rootReducer = combineReducers({
  authState: authReducer,
  studentsState: studentsReducer,
  studentsPlansState: studentsPlansReducer,
  specialitiesState: specialitiesReducer,
  notificationState: notificationReducer,
  facultiesState: facultiesReducer,
});
