import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from 'react';
import Header from './../header/Header'
import { useTranslation} from "react-i18next";

const Home = (props)=>{
    const {heroData} = props;   
    const { t, i18n} = useTranslation();
    const lang = i18n.language;
    const today = new Date();
    const pos = today.getDate() % heroData.length;
    const hero = heroData.at(pos);
    return (
        <main>
            <Header/>
            <Box>
                <Typography
                component="h1"
                variant="h1"
                align="center">
                    {t("home.portalTitle")}
                </Typography>
                <Typography
                component="h5"
                variant="h5"
                align="center">
                    {t("home.portalDesription")}
                </Typography>
            </Box>
            <Container maxWidth="lg">
                <Typography
                component="h3"
                variant="h3"
                align="center"
                >
                    {t("home.heroOfTheDay")}
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
                    image={hero.photo.src}
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
                            href={`/hero/${hero.id_Hero}`}
                            size="large">
                                {t("home.seeMoreButton")}
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
                    {t("home.devsTitle")}
                </Typography>
                <Grid container direction="row" justifyContent="space-around" spacing={4}>
                    <Grid item key={1}>
                        <Card sm={6} md={4}>
                            <CardMedia>
                                <Avatar
                                alt="logo"
                                src="icons/logo3.png"
                                sx={{ width: 100, height:100 }}/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    KirillStolbov
                                </Typography>
                                <a href="https://github.com/KirillStolbov" target="_blank" rel="noopener noreferrer">
                                    <Typography>
                                        https://github.com/KirillStolbov
                                    </Typography>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key={2}>
                        <Card sm={6} md={4}>
                            <CardMedia display="flex" justifyContent="center">
                                <Avatar
                                alt="logo"
                                src="icons/logo2.png"
                                sx={{ width: 100, height:100 }}/>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    1Arsen1
                                </Typography>
                                <a href="https://github.com/1Arsen1" target="_blank" rel="noopener noreferrer">
                                    <Typography>
                                        https://github.com/1Arsen1
                                    </Typography>
                                </a>
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
                                <a href="https://github.com/KopVZakone" target="_blank" rel="noopener noreferrer">
                                    <Typography>
                                        https://github.com/KopVZakone
                                    </Typography>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
};
export default Home;