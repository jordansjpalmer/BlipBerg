import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './reducers/ArticlesReducer'

const store = configureStore({
    reducer: {
        articles: articlesReducer
    }
});

export default store;
