import { combineReducers } from "redux";
import contactReducers from "./contactReducers";
import PostesReducers from "./postesReducers";

export default combineReducers({
    mycontacts:contactReducers,
    myPostes: PostesReducers

})
