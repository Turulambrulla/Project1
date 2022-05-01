import React, { useContext } from "react";
import {Switch , Route, Redirect} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)

  
    return(
        <Switch>
            {user.isAuth && authRoutes.map(({Path, Component}) =>
                <Route key={Path} path={Path} component={Component} exact/>
            )}
            {publicRoutes.map(({Path, Component}) =>
                <Route key={Path} path={Path} component={Component} exact/>
            )}
             <Redirect to={MAIN_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;