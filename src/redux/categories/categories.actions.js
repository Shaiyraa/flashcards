import CategoriesActionTypes from "./categories.types";

export const getTopLevelCategoriesStart = () => ({
  type: CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_START,
});

export const getTopLevelCategoriesSuccess = (categories) => ({
  type: CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getTopLevelCategoriesFailure = (error) => ({
  type: CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_FAILURE,
  payload: error,
});

export const getCurrentCategoryStart = (categoryId) => ({
  type: CategoriesActionTypes.GET_CURRENT_CATEGORY_START,
  payload: categoryId,
});

export const getCurrentCategorySuccess = (category) => ({
  type: CategoriesActionTypes.GET_CURRENT_CATEGORY_SUCCESS,
  payload: category,
});

export const getCurrentCategoryFailure = (error) => ({
  type: CategoriesActionTypes.GET_CURRENT_CATEGORY_FAILURE,
  payload: error,
});

export const getSubcategoriesStart = (parentId) => ({
  type: CategoriesActionTypes.GET_SUBCATEGORIES_START,
  payload: parentId,
});

export const getSubcategoriesSuccess = (subcategories) => ({
  type: CategoriesActionTypes.GET_SUBCATEGORIES_SUCCESS,
  payload: subcategories,
});

export const getSubcategoriesFailure = (error) => ({
  type: CategoriesActionTypes.GET_SUBCATEGORIES_FAILURE,
  payload: error,
});
