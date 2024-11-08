import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles/index.scss";

import App from "./components/App/App";
import ErrorPage from "./components/Pages/ErrorPage";
import Songs from "./components/Pages/Songs/Songs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./dataContext/dataContext";
import Home from "./components/Pages/Home/Home";
import Pictures from "./components/Pages/Pictures/Pictures";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/pictures" element={<Pictures />} />

      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

root.render(
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </DataProvider>
  </QueryClientProvider>
);
