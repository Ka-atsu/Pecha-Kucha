import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../../public/home/pages/HomePage";
import AboutPKPage from "../../public/about-pk/pages/AboutPKPage";
import ManualPage from "../../public/manual/pages/ManualPage";
import TipsPage from "../../public/tips/pages/TipsPage";
import ExamplesPage from "../../public/examples/pages/ExamplesPage";
import GeneratorPage from "../../public/generator/pages/GeneratorPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-pk" element={<AboutPKPage />} />
        <Route path="/manual" element={<ManualPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Route>
    </Routes>
  );
}
