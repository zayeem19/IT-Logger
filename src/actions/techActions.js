import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

//Gets technicians from server
export const getTechs = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("/techs");
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Adds new technician to the sever
export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Deletes technician from database
export const deleteTech = (id) => {
  return async (dispatch) => {
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  };
};

//Sets loading status
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
