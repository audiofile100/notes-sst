import {Container, Typography} from "@mui/material";

export const err404 = () => {
    return (
        <Container maxWidth={"md"}>
            <Typography sx={{ mt: 200 }} variant={"h4"}>Sorry, page not found!</Typography>
        </Container>
    )
}