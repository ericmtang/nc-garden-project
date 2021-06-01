import { CLASSIFIEDSDATA } from '../shared/classifiedsdata';
import * as ActionTypes from './ActionTypes';

export const ClassifiedsData = (state = CLASSIFIEDSDATA, action) => {
    switch (action.type) {
        case ActionTypes.POST_AD:
            const newAd = action.payload;
            newAd.id = state.length;
            newAd.date = new Date().toISOString();
            newAd.image = '/assets/images/classx.jpg';
            return state.concat(newAd);
        default:
            return state;
    }
}