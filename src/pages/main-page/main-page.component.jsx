import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTopLevelCategoriesStart } from "../../redux/categories/categories.actions";
import Category from "../../components/category/category.component";
import { selectTopLevelCategories } from "../../redux/categories/categories.selectors";

import { Container, Categories } from "./main-page.styles";
import { createStructuredSelector } from "reselect";

const MainPage = ({ getTopLevelCategories, topLevelCategories }) => {
  // Fetch top-level categories when the component mounts
  useEffect(() => {
    getTopLevelCategories();
  }, [getTopLevelCategories]);

  return (
    <Container>
      <h1>Czego dziś się uczymy?</h1>
      <p>Witaj na stronie głównej aplikacji.</p>
      <Categories>
        {topLevelCategories &&
          topLevelCategories.map((c) => (
            <Category
              key={c._id}
              category={c}
              hasChildren={c.subcategories.length > 0}
            />
          ))}
      </Categories>
    </Container>
  );
};
const mapStateToProps = createStructuredSelector({
  topLevelCategories: selectTopLevelCategories,
});

const mapDispatchToProps = (dispatch) => ({
  getTopLevelCategories: () => dispatch(getTopLevelCategoriesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
