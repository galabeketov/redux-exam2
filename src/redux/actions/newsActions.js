import { Category } from "@mui/icons-material";
import { GetCategory, GetDatabooks } from "../../api";
import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_UNIVERSITY } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setbooksByCategory = async () => {
  setLoading(true);
  setError(false);

  const obj = await GetDatabooks();
  if (obj.success) dispatch({ type: SET_UNIVERSITY, payload: obj.data });
  else setError(true);
  setLoading(false);
};

export const GetCategoryUniversity = async (country) => {
  setLoading(true);
  setError(false);

  const obj = await GetCategory(country);
  if (obj.success) dispatch({ type: SET_CATEGORY, payload: obj });
  else setError(true);
  setLoading(false);
};
