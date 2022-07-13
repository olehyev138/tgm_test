import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import CreatorProfile from "./pages/CreatorProfile";

export interface IAplicationProps {};

const Aplication: React.FunctionComponent<IAplicationProps> = props =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CreatorProfile/>}></Route>
                <Route path='profile' element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Aplication;