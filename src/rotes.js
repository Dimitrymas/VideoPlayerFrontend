import LoginPage from "./pages/LoginPage";
import {LOGIN_ROUTE, HOME_ROUTE} from "./utils/constants";
import HomePage from "./pages/HomePage";


export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
]
