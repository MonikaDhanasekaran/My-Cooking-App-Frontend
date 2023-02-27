import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import jwt from "jsonwebtoken";
import { Card, CardMedia, CardContent, AppBar, Box, Grid, Toolbar, Typography, IconButton, Button } from '@mui/material';
import "../HomeComponents/Home.css";
import { ArrowBack } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const JapaneseRecipeComponent = () => {

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
            const response = await axios.get("https://my-cooking-app.onrender.com/cook/japaneseRecipe/get", {
                headers: {
                    accesstoken: localStorage.getItem("token"),
                },
            });
            setRecipe(response.data);
        }
    }

    const handleBack = () => {
        navigate("/home");
    }

    return (
        <>
            <div id="japanese">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" id="japaneseTypo" component="div" sx={{ flexGrow: 1 }}>
                                Japanese Recipes
                            </Typography>
                            <Button color="inherit" id="japaneseButton" onClick={handleBack}><ArrowBack style={{ fontSize: "20px" }} />Back</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid container spacing={2}>
                    {getRecipe.length && getRecipe.map((row, index) => (
                        <Grid item key={index}>
                            <Card id="cardJapanese">
                                <CardMedia
                                    component="img"
                                    id="cardMedia"
                                    height="160"
                                    width="50%"
                                    image={row.image}
                                />
                                <CardContent>
                                    <Typography id="typoJapanese" gutterBottom variant="h6" component="div">
                                        {row.name}
                                    </Typography>
                                    <Typography id="typoJapaneses" gutterBottom variant="h6" component="div">
                                        Total Time: {row.totalTime}
                                    </Typography>
                                    <a href={row.recipe} target="_blank" id="atagJapanese">
                                        Click for Recipe
                                    </a>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default JapaneseRecipeComponent;