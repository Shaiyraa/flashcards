import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectTopLevelCategories = createSelector(
  [selectCategories],
  (categories) => categories.topLevelCategories
);

export const selectCurrentCategory = createSelector(
  [selectCategories],
  (categories) => categories.currentCategory
);

export const selectSubcategories = createSelector(
  [selectCategories],
  (categories) => categories.subcategories
);
