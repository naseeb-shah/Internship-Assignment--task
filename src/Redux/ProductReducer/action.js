import axios from "axios";
import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

export const getRecipes = () => async (dispatch) => {
    dispatch({ type: RECIPE_REQUEST_PENDING });
    try {
        let res = await axios.get(`https://serverside-five.vercel.app/product`);
        console.log(res.data.data)
        dispatch({ type: RECIPE_REQUEST_SUCCESS, payload: res.data.data });
    } catch (e) {
        dispatch({ type: RECIPE_REQUEST_FAILURE, payload: e.message });
    }
};
