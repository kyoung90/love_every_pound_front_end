import {api_url} from "../commons/api_url"
import { toast } from "react-toastify";

export function fetchRandomQuote() {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        return fetch(`${api_url}quotes/random`, {
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        })
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({type: "FETCH_RANDOM_QUOTE", payload: responseJSON})
            }).catch(error => {
                toast.error(error.message)
              })
    };
}