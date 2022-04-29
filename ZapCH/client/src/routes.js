import Admin from "./pages/Admin.js"
import Auth from "./pages/Auth.js"
import PartPage from "./pages/PartPage.js"
import Main from "./pages/Main.js"
import { ADMIN_ROUTE,
        MAIN_ROUTE,
        REGISTRATION_ROUTE,
        LOGIN_ROUTE,
        PART_ROUTE
        } from "./utils/consts"

export const authRoutes = [
    {
        Path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes =[
    {
        Path: MAIN_ROUTE,
        Component: Main
    },
    {
        Path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        Path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        Path: PART_ROUTE + '/:id',
        Component: PartPage
    }
]