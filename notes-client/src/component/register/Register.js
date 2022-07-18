import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Register = () => {
    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(username);
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
                <TextField margin={"normal"} required fullWidth id={"username"} onChange={handleChange} value={username} placeholder={"username"} />
                <Button type={"submit"} fullWidth variant={"contained"} sx={{ mt: 3 }}>Register</Button>
            </Box>
            <Grid container sx={{ mt: 1 }} spacing={2}>
                <Grid item>
                    <Typography variant={"caption"}>Already have an account?</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"caption"}><Link to={"/login"}>Login</Link></Typography>
                </Grid>
            </Grid>
        </Container>
    )
}