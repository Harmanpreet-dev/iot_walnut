const initialState = {
  selectedFleet: null,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED_FLEET": {
      state = {
        ...state,
        selectedFleet: action.payload,
      };
      return state;
    }
    case "GET_SELECTED_FLEET": {
      return state;
    }
    default:
      return state;
  }
}
