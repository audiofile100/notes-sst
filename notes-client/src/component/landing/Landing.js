import {ElevatedAppBar} from "../appbar/ElevatedAppBar";
import {Outlet} from "react-router-dom";

export const Landing = () => {
    return (
        <>
            <ElevatedAppBar />
            <Outlet />
        </>
    )
}