import { STOREREVIEWDATA } from '../shared/storeReviewData';
import * as ActionTypes from './ActionTypes';

export const StoreReviewData = ( state = STOREREVIEWDATA, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEW:
            const review = action.payload;
            review.id = state.length;
            review.date = new Date().toISOString();
            return state.concat(review);
        default: {
            return state;
        }
    }
}
