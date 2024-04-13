import { HomePage } from "../pages/Home"
import { CategoryPage } from "../pages/Category"

export const publicRoutes = [
    {path: "/", element: <HomePage />},
    {path: "/category/:name", element: <CategoryPage />}
]