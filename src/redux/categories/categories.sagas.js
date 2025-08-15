import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  getTopLevelCategoriesSuccess,
  getTopLevelCategoriesFailure,
  getCurrentCategorySuccess,
  getCurrentCategoryFailure,
  getSubcategoriesSuccess,
  getSubcategoriesFailure,
} from "./categories.actions";
import CategoriesActionTypes from "./categories.types";
import config from "../../config";

const api = axios.create({
  withCredentials: true,
  baseURL: config.API_URL,
});

function* getTopLevelCategories() {
  try {
    const res = yield api.get("/categories/top-level");
    const { categories } = res.data.data;
    yield put(getTopLevelCategoriesSuccess(categories));
  } catch (error) {
    yield put(getTopLevelCategoriesFailure(error));
    // yield put(
    //   setAlert({ message: "Error getting categories", severity: "error" })
    // );
  }
}

function* getCurrentCategory({ payload: categoryId }) {
  try {
    const res = yield api.get(`/categories/${categoryId}`);
    const { category } = res.data.data;
    yield put(getCurrentCategorySuccess(category));
  } catch (error) {
    yield put(getCurrentCategoryFailure(error));
    // yield put(
    //   setAlert({ message: "Error getting category", severity: "error" })
    // );
  }
}

function* getSubcategories({ payload: parentId }) {
  try {
    const res = yield api.get(`/categories?parentId=${parentId}`);
    const { categories } = res.data.data;
    yield put(getSubcategoriesSuccess(categories));
  } catch (error) {
    yield put(getSubcategoriesFailure(error));
    // yield put(
    //   setAlert({ message: "Error getting subcategories", severity: "error" })
    // );
  }
}

function* onGetTopLevelCategoriesStart() {
  yield takeLatest(
    CategoriesActionTypes.GET_TOP_LEVEL_CATEGORIES_START,
    getTopLevelCategories
  );
}

function* onGetCurrentCategoryStart() {
  yield takeLatest(
    CategoriesActionTypes.GET_CURRENT_CATEGORY_START,
    getCurrentCategory
  );
}

function* onGetSubcategoriesStart() {
  yield takeLatest(
    CategoriesActionTypes.GET_SUBCATEGORIES_START,
    getSubcategories
  );
}

export function* categoriesSaga() {
  yield all([
    call(onGetTopLevelCategoriesStart),
    call(onGetCurrentCategoryStart),
    call(onGetSubcategoriesStart),
  ]);
}
