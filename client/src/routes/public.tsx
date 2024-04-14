import { HomePage } from "../pages/Home"
import { CategoryPage } from "../pages/Category"
import { SolutionPage } from "../pages/Solution"

export const publicRoutes = [
    {path: "/", element: <HomePage />},
    {path: "/category/:name", element: <CategoryPage />},
    {path: "/:categoryName/:title", element: <SolutionPage />}
]