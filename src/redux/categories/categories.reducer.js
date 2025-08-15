import CategoriesActionTypes from "./categories.types";

const INITIAL_STATE = {
  topLevelCategories: [], // to load on the main page
  currentCategory: null, // to display on CategoryPage
  subcategories: [], // to display children of Category on CategoryPage
  loading: false,
  error: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        topLevelCategories: action.payload,
      };
    case CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CategoriesActionTypes.GET_CURRENT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        currentCategory: action.payload,
      };
    case CategoriesActionTypes.GET_CURRENT_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CategoriesActionTypes.GET_SUBCATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CategoriesActionTypes.GET_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        subcategories: action.payload,
      };
    case CategoriesActionTypes.GET_SUBCATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
