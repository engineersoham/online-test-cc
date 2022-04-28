import * as React from 'react';
import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:80 }}>
                        Online Mocktest
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr:8 }}>
                        <Link style={{ textDecoration: 'none', color:'white' }} to='/login'>Login</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        <Link style={{ textDecoration: 'none', color:'white' }} to='/signup'>Sign Up</Link>
                    </Typography>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav