import firebase from "firebase/app";

import auth from "../../firebase";
import * as actionTypes from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    const signinResponse = await auth.signInWithPopup(provider);

    const accessToken = signinResponse.credential.accessToken;

    const profile = {
      name: signinResponse.additionalUserInfo.profile.name,
      photoURL: signinResponse.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};