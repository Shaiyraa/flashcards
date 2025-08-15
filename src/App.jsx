import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import MainPage from "./pages/main-page/main-page.component";
import SingleCardPage from "./pages/single-card-page/single-card-page.component";
import CategoryPage from "./pages/category-page/category-page.component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card" element={<SingleCardPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
