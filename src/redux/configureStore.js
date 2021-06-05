import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'
import { Users } from './users';
import { BlogData } from './blogData';
import { ClassifiedsData } from './classifiedsData';
import { RecipeData } from './recipedata';
import { StoreReviewData } from './storeReviewData';
import { PostAd } from './forms';
import { logger } from 'redux-logger'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            blogData: BlogData,
            classifiedsData: ClassifiedsData,
            recipeData: RecipeData,
            storeReviewData: StoreReviewData
        }),
        applyMiddleware(logger)
    );

    return store;
};