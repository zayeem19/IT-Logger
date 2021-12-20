import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "./types";

//Fetches logs from api
export const getLogs = () => {
  return async (dispatch) => {
    setLoading();
    try {
      const res = await fetch("/logs");
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Add a log to db
export const addLog = (log) => {
  return async (dispatch) => {
    setLoading();
    try {
      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Deletes log
export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`/logs/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Search logs
export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Update log on db
export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        "Content-Type": "application/json",
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clears current input
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
