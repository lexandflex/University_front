import { STUDENTS_PLANS_TYPES } from '../actions/studentsPlans';

const initialState = {
  studentsPlans: null,
  error: '',
  isLoading: false,
};

export const studentsPlansReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS:
      return { ...state, isLoading: true };
    case STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS_SUCCESS:
      return {
        ...state,
        studentsPlans: action.payload,
        error: '',
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.GET_STUDENTS_PLANS_ERROR:
      return {
        ...state,
        error: action.payload,
        students: null,
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN:
      return { ...state, isLoading: true };
    case STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN_SUCCESS:
      return {
        ...state,
        studentsPlans: [...state.studentsPlans, action.payload],
        error: '',
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.CREATE_STUDENTS_PLAN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN:
      return { ...state, isLoading: true };
    case STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentsPlans: state.studentsPlans.filter(
          (studentPlan) => studentPlan.id !== action.payload
        ),
      };
    case STUDENTS_PLANS_TYPES.DELETE_STUDENTS_PLAN_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN:
      return { ...state, isLoading: true };
    case STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN_SUCCESS:
      return {
        ...state,
        studentsPlans: state.studentsPlans.map((studentPlan) =>
          studentPlan.id === action.payload.id ? action.payload : studentPlan
        ),
        error: '',
        isLoading: false,
      };
    case STUDENTS_PLANS_TYPES.EDIT_STUDENTS_PLAN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
