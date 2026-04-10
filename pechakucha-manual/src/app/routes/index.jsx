import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import LandingPage from "../../public/pages/LandingPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
