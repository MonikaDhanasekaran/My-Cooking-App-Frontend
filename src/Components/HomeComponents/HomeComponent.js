import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import jwt from "jsonwebtoken";
import { Card, CardMedia, CardContent, AppBar, Box, Grid, Toolbar, Typography, Container, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Home.css";

const HomeComponent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const [getRecipe, setRecipe] = useState([]);

    useEffect(() => {
        getCreatedRecipes();
    }, []);

    const getCreatedRecipes = async () => {
        const decodedToken = jwt.decode(localStorage.getItem("token"));
        if (decodedToken.exp * 1000 < Date.now()) {
            navigate("/")
        } else {
            const response = await axios.get("https://my-cooking-app.onrender.com/cook/recentRecipe/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setRecipe(response.data);
        }
    }

    const handleIndianRecipe = () => {
        navigate("/cook/indianRecipe");
    }

    const handleChineseRecipe = () => {
        navigate("/cook/chineseRecipe");
    }

    const handleAsianRecipe = () => {
        navigate("/cook/asianRecipe");
    }

    const handleJapaneseRecipe = () => {
        navigate("/cook/japaneseRecipe");
    }

    const handleItalianRecipe = () => {
        navigate("/cook/italianRecipe");
    }

    const handleSnackRecipe = () => {
        navigate("/cook/snackRecipe");
    }

    const handleContinentalRecipe = () => {
        navigate("/cook/continentalRecipe");
    }

    const handleDessertRecipe = () => {
        navigate("/cook/dessertRecipe");
    }

    const handleStarterRecipe = () => {
        navigate("/cook/starterRecipe");
    }

    const handleLogout = () => {
        navigate("/");
    }

    return (
        <>
            <div id="home">
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Courier',
                                    fontSize: "30px",
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                My Cooking App
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button variant="inherit" id='button'>
                                    Home
                                </Button>
                                <Button
                                    variant="inherit"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    id='button'
                                >
                                    Cuisines
                                    <ArrowDropDownIcon sx={{ fontSize: "30px" }} />
                                </Button>
                                <Menu
                                    id="categoriesDropdown"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleIndianRecipe}>Indian</MenuItem>
                                    <MenuItem onClick={handleChineseRecipe}>Chinese</MenuItem>
                                    <MenuItem onClick={handleAsianRecipe}>Asian</MenuItem>
                                    <MenuItem onClick={handleJapaneseRecipe}>Japanese</MenuItem>
                                    <MenuItem onClick={handleItalianRecipe}>Italian</MenuItem>
                                    <MenuItem onClick={handleContinentalRecipe}>Continental</MenuItem>
                                </Menu>
                                <Button variant="inherit" id='button' onClick={handleSnackRecipe}>
                                    Snack
                                </Button>
                                <Button variant="inherit" id='button' onClick={handleDessertRecipe}>
                                    Desserts
                                </Button>
                                <Button variant="inherit" id='button' onClick={handleStarterRecipe}>
                                    Starters
                                </Button>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Button variant="inherit" id='button' onClick={handleLogout}><LogoutIcon />Logout</Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div>
                    <h3 id="pHome">Recently Added</h3>
                    <Grid container spacing={2}>
                        {getRecipe.length && getRecipe.map((row, index) => (
                            <Grid item key={index}>
                                <Card id="cardRecipe">
                                    <CardMedia
                                        component="img"
                                        id="cardMedia"
                                        height="160"
                                        width="50%"
                                        image={row.image}
                                    />
                                    <CardContent>
                                        <Typography id="typoRecipe" gutterBottom variant="h6" component="div">
                                            {row.name}
                                        </Typography>
                                        <Typography id="typoRecipes" gutterBottom variant="h6" component="div">
                                            Total Time: {row.totalTime}
                                        </Typography>
                                        <a href={row.recipe} target="_blank" id="atagRecipe">
                                            Click for Recipe
                                        </a>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HomeComponent;