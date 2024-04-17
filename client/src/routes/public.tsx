import { HomePage } from "../pages/Home"
import { CategoryPage } from "../pages/Category"
import { SolutionPage } from "../pages/Solution"
import { SearchResultPage } from "../pages/SearchResult"

export const publicRoutes = [
    {path: "/", element: <HomePage />},
    {path: "/category/:name", element: <CategoryPage />},
    {path: "/:categoryName/:title", element: <SolutionPage />},
    {path: "/search/:title", element: <SearchResultPage />}
]