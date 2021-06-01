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

export const postAd = (user, title, price, description, category) => ({
    type: ActionTypes.POST_AD,
    payload: {
        user: user,
        title: title,
        price: price,
        description: description,
        category: category,
    }
});