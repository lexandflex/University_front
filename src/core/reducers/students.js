import { STUDENTS_TYPES } from '../actions/students';

const initialState = {
  students: null,
  error: '',
  isLoading: false,
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENTS_TYPES.GET_STUDENTS:
      return { ...state, isLoading: true };
    case STUDENTS_TYPES.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        error: '',
        isLoading: false,
      };
    case STUDENTS_TYPES.GET_STUDENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        students: null,
        isLoading: false,
      };
    case STUDENTS_TYPES.CREATE_STUDENT:
      return { ...state, isLoading: true };
    case STUDENTS_TYPES.CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
        error: '',
        isLoading: false,
      };
    case STUDENTS_TYPES.CREATE_STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case STUDENTS_TYPES.DELETE_STUDENT:
      return { ...state, isLoading: true };
    case STUDENTS_TYPES.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    case STUDENTS_TYPES.DELETE_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case STUDENTS_TYPES.EDIT_STUDENT:
      return { ...state, isLoading: true };
    case STUDENTS_TYPES.EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        error: '',
        isLoading: false,
      };
    case STUDENTS_TYPES.EDIT_STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
