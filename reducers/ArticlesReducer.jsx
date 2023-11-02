import { SET_ARTICLES } from "../actions/actionTypes";

const initialState = {
    articles: [],
};

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {...state, articles: action.payload};
        default:
            return state;
    }
};

export default articlesReducer;