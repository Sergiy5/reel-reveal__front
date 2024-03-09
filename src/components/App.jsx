import { Route, Routes } from "react-router-dom";
import { MainWrapper } from "../styles/MainWrapper.styled";
import Layout from "./layout/Layout";

export const App = () => {
  return (
     <MainWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<Favorite />} />

          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </MainWrapper>
  );
};
