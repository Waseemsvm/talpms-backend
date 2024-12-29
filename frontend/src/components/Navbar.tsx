import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from "@mui/icons-material/AccountCircle";

interface $NavBarSettings {
    onClickMenuIcon?: CallableFunction;
}

export default function NavBar({ onClickMenuIcon }: $NavBarSettings) {
    return <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        onClickMenuIcon?.();
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography >
                    The Akrams Learning Point
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>

}