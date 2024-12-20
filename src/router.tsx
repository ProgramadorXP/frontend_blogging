import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/HomeView";
import AuthLayout from "./layouts/AuthLayout";
import SignInView from "./views/SignInView";
import SignUpView from "./views/SignUpView";
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileView from "./views/ProfileView";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomeView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignInView />} />
          <Route path="signup" element={<SignUpView />} />
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path="profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
