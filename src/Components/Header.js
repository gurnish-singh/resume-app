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
                position="static"
                style={{background: "#191919"}}
            >
                <Toolbar>
                    <Typography
                        variant="subtitle"
                        style={{ flexGrow: 1 ,fontSize:"30px"}}
                    >
                       Gurnish Singh
                    </Typography>
                    <Hidden mdUp>
                        <IconButton  >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Button
                            href="#about"
                            style={{ fontSize: "2rem" }}
                        >
                            About
                        </Button>

                        <Button
                            href="#education"
                            style={{ fontSize: "2rem" }}
                        >
                            Education
                        </Button>
                        <Button
                            href="#skills"
                            style={{ fontSize: "2rem" }}
                        >
                            Skills
                        </Button>
                        <Button
                            href="#experience"
                            style={{ fontSize: "2rem" }}
                        >
                            Experience
                        </Button>

                        <Button
                            href="#contact"
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