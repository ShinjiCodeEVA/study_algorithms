import { Solutions } from "../features/solution/routes";
import Home from "../pages/Home";
import { Problems } from "../features/problem";
import { EntryCreation } from "../features/entry/routes";

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
    {
      path: '/admin/create',
      element: <EntryCreation />
    }
];