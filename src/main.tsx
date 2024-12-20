import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles/index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/App/App";
import ErrorPage from "./components/Pages/ErrorPage";
import Songs from "./components/Pages/Songs/Songs";
import Home from "./components/Pages/Home/Home";
import Pictures from "./components/Pages/Pictures/Pictures";
import Login from "./components/Pages/Login/Login";
import PrivateRoute from "./components/rooting/PrivateRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/songs" element={<Songs />} />
        <Route path="/pictures" element={<Pictures />} />
      </Route>
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

root.render(
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </QueryClientProvider>
);
