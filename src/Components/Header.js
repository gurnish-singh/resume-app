import React, {  Fragment } from "react";
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

function Header() {
    return(
        <Fragment>
            <AppBar
                className="header-color"
                position="static"
            >
                <Toolbar>
                    <Typography
                        variant="subtitle"
                        color="inherit"
                        style={{ flexGrow: 1 }}
                    >
                        <Button
                            color="inherit"
                            style={{ fontSize: "2rem" }}
                        >
                            <i className="fas fa-cloud-download-alt"> Gurnish Singh</i>
                        </Button>
                    </Typography>
                    <Hidden mdUp>
                        <IconButton color="inherit" >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Button
                            href="#about"
                            color="inherit"
                            style={{ fontSize: "2rem" }}
                        >
                            About
                        </Button>

                        <Button
                            href="#resume"
                            color="inherit"
                            style={{ fontSize: "2rem" }}
                        >
                            Education
                        </Button>
                        <Button
                            href="#resume"
                            color="inherit"
                            style={{ fontSize: "2rem" }}
                        >
                            Experience
                        </Button>
                        <Button
                            href="#resume"
                            color="inherit"
                            style={{ fontSize: "2rem" }}
                        >
                            Skills
                        </Button>
                        <Button
                            href="#contact"
                            color="inherit"
                            style={{ fontSize: "2rem" }}
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
                        style={{ color: "yellow" }}
                    >
                        <div >
                            <IconButton >
                                <KeyboardArrowUpIcon />
                            </IconButton>
                            <List>
                                {[
                                    "about",
                                    "education",
                                    "experience",
                                    "skills",
                                    "achievements" ,
                                    "contact"
                                ].map((text, index) => (
                                    <ListItem button key={index} className="menu_btn">
                                        <Button >
                                            <ListItemText primary={text} />
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                </div>
            </Hidden>
        </Fragment>
    );
}

export default Header;