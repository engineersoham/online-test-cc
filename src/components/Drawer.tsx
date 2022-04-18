import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Box, Radio, List, CssBaseline, ListItemButton, ListItemText,  Divider,  IconButton  }  from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { initialValue } from '../reducer/reducer';


const openedMixin = (theme: Theme): CSSObject => ({
    width: 200,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }


const Drawer1 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Drawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const newstate1 = useSelector<initialValue>(state => state.ans1);
    const newstate2 = useSelector<initialValue>(state => state.ans2)
    const newstate3 = useSelector<initialValue>(state => state.ans3)
    const newstate4 = useSelector<initialValue>(state => state.ans4)
    const newstate5 = useSelector<initialValue>(state => state.ans5)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer1 variant="permanent" open={open}>

                <DrawerHeader style={{backgroundColor:'rgb(18, 114, 209)'}}>
                    {open ?
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                        :
                       
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 1,
                                }} 
                            >
                                <MenuIcon />
                            </IconButton>
                    }

                </DrawerHeader>
                <Divider />
                <List>
                    
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Radio onClick={()=>{navigate('/que1')}} checked
                             style={newstate1 ? {backgroundColor:'lightgreen', marginRight:'10px'} : {backgroundColor:'gray', marginRight:'10px'}} />
                            <ListItemText primary='Q1' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Radio onClick={()=>{navigate('/que2')}} checked 
                             style={newstate2 ? {backgroundColor:'lightgreen', marginRight:'10px'} : {backgroundColor:'gray', marginRight:'10px'}} />
                            <ListItemText primary='Q2' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Radio onClick={()=>{navigate('/que3')}} checked 
                             style={newstate3 ? {backgroundColor:'lightgreen', marginRight:'10px'} : {backgroundColor:'gray', marginRight:'10px'}} />
                            <ListItemText primary='Q3' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Radio onClick={()=>{navigate('/que4')}} checked
                             style={newstate4 ? {backgroundColor:'lightgreen', marginRight:'10px'} : {backgroundColor:'gray', marginRight:'10px'}} />
                            <ListItemText primary='Q4' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Radio onClick={()=>{navigate('/que5')}} checked 
                             style={newstate5 ? {backgroundColor:'lightgreen', marginRight:'10px'} : {backgroundColor:'gray', marginRight:'10px'}} />
                            <ListItemText primary='Q5' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                   
                </List>

            </Drawer1>
           
            
        </Box>
    );
}