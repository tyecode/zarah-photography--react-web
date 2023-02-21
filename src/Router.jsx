import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  PortfolioPage,
  BlogPage,
  ContactPage,
} from "./pages";

const Router = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/gallery" element={<PortfolioPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default Router;
