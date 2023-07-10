import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig)

export const store = configureStore({
    reducer: {
        counter: persistedReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE< REGISTER]
            }
        })
   
})

export const persistor = persistStore(store)