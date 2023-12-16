import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from 'react';
import Header from './../header/Header'
import { useTranslation} from "react-i18next";
const BASE_GITHUB_URL = "https://github.com/";
const DeveloperCard = ({ name, avatarSrc }) => {
    const githubLink = BASE_GITHUB_URL + name;
    return (
    <Grid item sx={{ minWidth: '150px' }}>
      <Card sm={6} md={4}>
        <CardMedia sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Avatar alt="logo" src={avatarSrc} sx={{ width: 100, height: 100 }} />
          </a>
        </CardMedia>
        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Typography>{name}</Typography>
          </a>
        </CardContent>
      </Card>
    </Grid>
    );
 };
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
                <Typography component="h4" variant="h4" align="center">
                    {t("home.devsTitle")}
                </Typography>
                <Grid container direction="row" justifyContent="space-around" spacing={4}>
                    <DeveloperCard name="KirillStolbov" avatarSrc="icons/logo3.png" />
                    <DeveloperCard name="1Arsen1" avatarSrc="icons/logo2.png" />
                    <DeveloperCard name="KopVZakone" avatarSrc="icons/logo1.png" />
                </Grid>
            </Container>
        </main>
    )
};
export default Home;