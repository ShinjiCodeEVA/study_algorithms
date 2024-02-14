import Solutions from "../features/solution/routes/Solutions";
import Home from "../pages/Home";
import { Problems } from "../features/problem";

export const publicRoutes = [
    {
      path: '/home',
      element: <Home />
    },
    {
        path: '/category/:categoryName',
        element: <Problems />
    },
    {
      path: '/category/:categoryName/:id',
      element: <Solutions />
  },
];