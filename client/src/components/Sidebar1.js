import { Box, ListItemButton, ListItemIcon, ListItemText, List, ListItem, Switch } from '@mui/material';
import { Home, Store } from '@mui/icons-material';
import { AccountBox } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import ModeNight from '@mui/icons-material/ModeNight';
import React, { useEffect, useState } from 'react';

const Sidebar = ({ setMode, mode, open1 }) => {
    const [val, setVal] = useState("block")
    console.log(open1)
    useEffect(() => {
        if (open1 === "false") setVal("300px")
        if (open1 === "true") setVal("0px")
    }, [open1])

    return (
        // <Box flex={1} p={2} sx={{ display: { xs: "none", sm: val } }}>
        //     <Box position="fixed">
        // <List>
        //     <ListItem disablePadding>
        //         <ListItemButton component="a" href="#">
        //             <ListItemIcon>
        //                 <Home />
        //             </ListItemIcon>
        //             <ListItemText primary="Homepage" />
        //         </ListItemButton>
        //     </ListItem>
        // </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <ArticleIcon />
        //                     </ListItemIcon>
        //                     <ListItemText primary="Pages" />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <GroupIcon />
        //                     </ListItemIcon>
        //                     <ListItemText primary="Groups" />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <StorefrontIcon />
        //                     </ListItemIcon>
        //                     <ListItemText primary="Marketplace" />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <PersonIcon />
        //                     </ListItemIcon>
        //                     <ListItemText primary="Friends" />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <Settings />
        //                     </ListItemIcon>
        //                     <ListItemText primary="Settings" />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //         <List>
        //             <ListItem disablePadding>
        //                 <ListItemButton component="a" href="#">
        //                     <ListItemIcon>
        //                         <ModeNight />
        //                     </ListItemIcon>
        //                     <Switch onChange={e=>setMode( mode === "light" ? "dark" : "light")} />
        //                 </ListItemButton>
        //             </ListItem>
        //         </List>
        //     </Box>
        // </Box>
        <Box sx={{ width: val, transition: "all 240ms linear" }}>
            <Box sx={{ position: "fixed", width: "100%" }}>
                <List sx={{ width: val, transition: "all 240ms linear" }}>
                    <ListItem disablePadding>
                        <Link to="/">
                            <ListItemButton component="a" >
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Homepage" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <Link to="/settings">
                            <ListItemButton component="a" >
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>

        </Box>
    )
}

export default Sidebar