import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from 'react';

const Home = (props)=>{
    const {lang} = useParams();
    const {heroData} = props;
    const today = new Date();
    const pos = today.getDate() % heroData.length;
    const hero = heroData.at(pos);
    return (
        <main>
            <Box>
                <Typography
                component="h1"
                variant="h1"
                align="center">
                    Portal
                </Typography>
                <Typography
                component="h5"
                variant="h5"
                align="center">
                    Description
                </Typography>
            </Box>
            <Container maxWidth="lg">
                <Typography
                component="h3"
                variant="h3"
                align="center"
                >
                    Hero of the day
                </Typography> 
                <Card
                    sx={{display: 'flex', flexDirection: 'row' }}
                >
                    <Box 
                    sx={{
                        width: 500, padding: 3
                    }}
                    alignSelf="center"
                    >
                    <CardMedia 
                    component="img" 
                    image={hero.photo}
                    /> 
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h4">
                                {hero.name.get(lang)}
                            </Typography>
                            <Typography>
                                {hero.inf.get(lang)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                            href={`/${lang}/hero/${hero.id_Hero}`}
                            size="large">
                                See more
                            </Button>
                        </CardActions>
                    </Box>
                </Card>   
            </Container>
            <Container maxWidth="lg">
                <Typography 
                component="h4"
                variant="h4" 
                align="center">
                    Our Developers
                </Typography>
                <Grid container direction="row" justifyContent="space-around" spacing={4}>
                    <Grid item key={1}>
                        <Card sm={6} md={4}>
                            <CardMedia>
                                <Avatar
                                alt="logo"
                                src="icons/logo1.png"
                                sx={{ width: 100, height:100 }}/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    KopVZakone
                                </Typography>
                                <Typography>
                                    https://github.com/KopVZakone
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key={2}>
                        <Card sm={6} md={4}>
                            <CardMedia display="flex" justifyContent="center">
                                <Avatar
                                alt="logo"
                                src="icons/logo1.png"
                                sx={{ width: 100, height:100 }}/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    KopVZakone
                                </Typography>
                                <Typography>
                                    https://github.com/KopVZakone
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                    <Grid item key={3}>
                        <Card sm={6} md={4}>
                            <CardMedia display="flex" justifyContent="center">
                                <Avatar
                                alt="logo"
                                src="icons/logo1.png"
                                sx={{ width: 100, height:100 }}/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    KopVZakone
                                </Typography>
                                <Typography>
                                    https://github.com/KopVZakone
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
};
export default Home;