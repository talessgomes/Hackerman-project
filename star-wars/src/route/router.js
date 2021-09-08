import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { CharacterPage } from "../pages/CharacterPage/CharacterPage";
import { InformationPage } from "../pages/InformationPage/InformationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path={"/"} component={LoginPage} />
        <Route exact path={"/Personagem"} component={CharacterPage} />
        <Route exact path={"/Informação-Personagem"} component={InformationPage} />
        </Switch>
        </BrowserRouter>
    )
}