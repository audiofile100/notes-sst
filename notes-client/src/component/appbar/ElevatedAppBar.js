import {cloneElement} from "react";
import {AppBar, Box, Container, Divider, useScrollTrigger} from "@mui/material";
import {CLink} from "../link/CLink";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return cloneElement(children, {
        elevation: trigger ? 0 : 0,
    });
}

export const ElevatedAppBar = (props) => {
    return (
        <ElevationScroll {...props}>
            <AppBar sx={{ backgroundColor: "white", opacity: "0.97" }}>
                <Container maxWidth={"lg"}>
                    <Box sx={{ justifyContent: "flex-end", display: { xs: 'flex' } }}>
                        <CLink value={"Home"} />
                        <Box sx={{ flexGrow: 1 }} />
                        <CLink value={"Login"} />
                        <CLink value={"Register"} />
                    </Box>
                </Container>
                <Divider />
            </AppBar>
        </ElevationScroll>
    )
}