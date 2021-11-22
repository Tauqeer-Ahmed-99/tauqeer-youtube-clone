import * as actionTypes from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token"),
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case actionTypes.LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    default:
      return prevState;
  }
};
