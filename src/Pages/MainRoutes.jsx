import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { RecipeDetail } from "./RecipeDetail";
import { PrivateRoute } from "../Components/PrivateRoute";

import Deals from "./Deals";
import Details from "./Details";

// fix end points for routes/pages
export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          
            <Homepage />
          
        }
      ></Route>

      <Route
        path="/deals"
        element={
          <PrivateRoute>
            <Deals />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/details"
        element={
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/recipe/:id"
        element={
          <PrivateRoute>
            <RecipeDetail />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
