const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userData: action.payload.userData,
        isAuth: action.payload.isAuth,
        isLoading: false,
      };
    case "REGISTER":
      return {
        ...state,
        isAuth: action.payload.isAuth,
        userData: action.payload.userData,
        isLoading: false,
      };
    case "VERIFY_AUTH":
      return {
        ...state,
        isAuth: true,
        userData: action.payload.userData,
        isLoading: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
