import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Login = () => {

    const handleSubmit = () => {

    }

    return (
        <Container maxWidth={"xs"} sx={{ paddingTop: "220px", alignItems: "center"}}>
            <Box
                component={"form"}
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <TextField margin={"normal"} required fullWidth id={"email"} placeholder={"email"} />
                <Button type={"submit"} fullWidth variant={"contained"} sx={{ mt: 3 }}>Login</Button>
            </Box>
            <Grid container sx={{ mt: 1 }} spacing={2}>
                <Grid item>
                    <Typography variant={"caption"}>Don't have an account yet?</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"caption"}><Link to={"/register"}>Register</Link></Typography>
                </Grid>
            </Grid>
        </Container>
    )
}