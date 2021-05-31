import * as ActionTypes from './ActionTypes';

export const addReview = (star, title, text, name) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
        star: star,
        title: title,
        text: text,
        name: name
    }
});