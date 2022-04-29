import React from "react";
import {Routes , Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";


const AppRouter = () => {

    return(
        <Routes>
            {publicRoutes.map(({Path, Component}) =>
            <Route path={Path} element={Component} />
             )}
        </Routes>


    )
}

export default AppRouter;