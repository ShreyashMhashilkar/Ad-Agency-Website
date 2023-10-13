import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        AD AGENCY
                    </Typography>
                    <Stack direction='row' spacing={1}>
                        <Link to="/" style={{ color: '#fff' }}><Button color='inherit'>Dashboard</Button></Link>
                        <Link to="/create-ad" style={{ color: '#fff' }}><Button color='inherit'>Create Ads</Button></Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;