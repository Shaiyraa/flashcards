import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardsReducer from "./cards/cards.reducer";
import categoriesReducer from "./categories/categories.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cards", "categories"], // Specify which reducers to persist
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
