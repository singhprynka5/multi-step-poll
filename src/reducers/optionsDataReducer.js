import {
  ADD_OPTIONS_DATA,
  ADD_OPTIONS_DATA_SUCCESS,
  ADD_OPTIONS_DATA_FAILURE,
} from "../constants";

const initialState = {
  isSubmitted: false,
};

const optionsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPTIONS_DATA:
      return { ...state, isSubmitted: false };
    case ADD_OPTIONS_DATA_SUCCESS:
      return { ...state, isSubmitted: true };
    case ADD_OPTIONS_DATA_FAILURE:
      return { ...state, isSubmitted: false };
    default:
      return state;
  }
};

export default optionsDataReducer;
