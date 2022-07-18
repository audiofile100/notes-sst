import { Route, Routes } from "react-router-dom";
import {Landing} from "./component/landing/Landing";
import {Login} from "./component/login/Login";
import {Register} from "./component/register/Register";
import {err404} from "./component/error/err404";

export const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Landing />} >
                <Route path={"home"} element={<Landing />} />
                <Route path={"login"} element={<Login />} />
                <Route path={"register"} element={<Register />} />
            </Route>
            <Route path={"*"} element={<err404 />} />
        </Routes>
    )
}