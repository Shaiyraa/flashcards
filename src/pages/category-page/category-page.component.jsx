import React, { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Categories } from "./category-page.styles";

import {
  getCurrentCategoryStart,
  getSubcategoriesStart,
} from "../../redux/categories/categories.actions";
import {
  selectCurrentCategory,
  selectSubcategories,
} from "../../redux/categories/categories.selectors";
import Category from "../../components/category/category.component";

const CategoryPage = ({
  getCurrentCategoryStart,
  getSubcategoriesStart,
  currentCategory,
  subcategories,
}) => {
  // Get the category ID from the URL
  const { categoryId } = useParams();

  useEffect(() => {
    getCurrentCategoryStart(categoryId);
  }, [categoryId, getCurrentCategoryStart]);

  useEffect(() => {
    getSubcategoriesStart(categoryId);
  }, [categoryId, getSubcategoriesStart]);

  return (
    <div>
      <h1>Category Page: {currentCategory && currentCategory.name}</h1>
      <h2>Subcategories:</h2>
      <Categories>
        {subcategories &&
          subcategories.map((s) => (
            <Category
              key={s.id}
              category={s}
              hasChildren={s.subcategories.length > 0}
            />
          ))}
      </Categories>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategory: selectCurrentCategory,
  subcategories: selectSubcategories,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentCategoryStart: (categoryId) =>
    dispatch(getCurrentCategoryStart(categoryId)),
  getSubcategoriesStart: (categoryId) =>
    dispatch(getSubcategoriesStart(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
