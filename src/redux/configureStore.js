import { createStore, combineReducers } from 'redux';
import { Users } from './users';
import { BlogData } from './blogData';
import { ClassifiedsData } from './classifiedsData';
import { RecipeData } from './recipedata';
import { StoreReviewData } from './storeReviewData';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            blogData: BlogData,
            classifiedsData: ClassifiedsData,
            recipeData: RecipeData,
            storeReviewData: StoreReviewData
        })
    );

    return store;
};