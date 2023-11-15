import React, {Fragment, useState} from "react";
import {
    AppBar,
    Typography,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ThemeProvider, createTheme} from '@mui/material/styles';

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDrawerItemClick = (sectionId) => {
        // Close the drawer when an item is clicked
        setDrawerOpen(false);

        // Scroll to the section with the specified ID
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };
    const theme = createTheme({
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paperAnchorTop: {
                        backgroundColor: 'black', // Set the background color to black
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <AppBar
                    position="static"
                    style={{background: "#191919"}}
                >
                    <Toolbar>
                        <Typography
                            variant="subtitle"
                            style={{flexGrow: 1, fontSize: "30px"}}
                        >
                            Gurnish Singh
                        </Typography>
                        <Hidden mdUp>
                            <IconButton style={{color: "#ffffff"}} onClick={handleDrawerToggle}>
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('about')}
                            >
                                About
                            </Button>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('education')}
                            >
                                Education
                            </Button>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('skills')}
                            >
                                Skills
                            </Button>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('experience')}
                            >
                                Experience
                            </Button>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('blog')}
                            >
                                Blog
                            </Button>
                            <Button
                                sx={{
                                    color: '#525252',
                                }}
                                style={{fontSize: "2rem"}}
                                onClick={() => handleDrawerItemClick('contact')}
                            >
                                Contact
                            </Button>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <div>
                        <Drawer
                            anchor="top"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paperAnchorTop: 'customDrawerStyles', // Add your custom class
                            }}
                        >
                            <div>
                                <IconButton style={{color: "#ffffff"}} onClick={handleDrawerToggle}>
                                    <KeyboardArrowUpIcon/>
                                </IconButton>
                                <List>
                                    {[
                                        "about",
                                        "education",
                                        "skills",
                                        "experience",
                                        "blog",
                                        "contact"
                                    ].map((text, index) => (
                                        <ListItem
                                            button
                                            key={index}
                                            className="menu_btn"
                                            onClick={() => handleDrawerItemClick(text)}
                                            style={{fontSize: "2rem", color: "#ffffff"}} // Add your custom styles here
                                        >
                                            <ListItemText primary={text}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Drawer>
                    </div>
                </Hidden>
            </Fragment>
        </ThemeProvider>
    );
}

export default Header;