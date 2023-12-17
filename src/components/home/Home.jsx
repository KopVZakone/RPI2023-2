import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React from 'react';
import Header from './../header/Header'
import { useTranslation} from "react-i18next";

const Home = (props)=> {
    const {heroData} = props;   
    const { t, i18n} = useTranslation();
    const lang = i18n.language;
    const today = new Date();
    const pos = today.getDate() % heroData.length;
    const hero = heroData.at(pos);
    const createTypography = (text, variant) => (
        <Typography
          component={variant}
          variant={variant}
          sx={{
            pt:3
          }}
          align="center" >
          {t("home." + text)}
        </Typography>
      );
    return (
        <main>
            <Header/>
            <Box>
                {createTypography("portalTitle", "h1")}
                {createTypography("portalDesription", "h5")}
            </Box>
            <Container maxWidth="lg">
                {createTypography("heroOfTheDay", "h3")}
                <Card
                    sx={{display: 'flex', flexDirection: 'row' }} >
                    <Box sx={{ width: 500, padding: 3 }} alignSelf="center" >
                    <CardMedia component="img" image={hero.photo.src} /> 
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
            <Container maxWidth="lg" sx={{pt:10}}>
                <Typography component="h4" variant="h4" align="center">
                    {t("home.devsTitle")}
                </Typography>
                <Grid container direction="row" justifyContent="space-around" spacing={4} sx={{pt:10}}>
                    <DeveloperCard name="KirillStolbov" avatarSrc="icons/logo3.png" />
                    <DeveloperCard name="1Arsen1" avatarSrc="icons/logo2.png" />
                    <DeveloperCard name="KopVZakone" avatarSrc="icons/logo1.png" />
                </Grid>
            </Container>
        </main>
    )
};

const BASE_GITHUB_URL = "https://github.com/";
const DeveloperCard = ({ name, avatarSrc }) => {
    const githubLink = BASE_GITHUB_URL + name;
    const centerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const generateLinkProps = (url) => ({
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
    });
    return (
    <Grid item sx={{ minWidth: '150px' }}>
      <Card sm={6} md={4} square>
        <CardMedia sx={centerStyles}>
           <a {...generateLinkProps(githubLink)}>
               <Avatar alt="logo" src={avatarSrc} sx={{ width: 100, height: 100 }} />
           </a>
        </CardMedia>
        <CardContent sx={centerStyles}>
           <a {...generateLinkProps(githubLink)} style={{ textDecoration: 'none' }}>
               <Typography>{name}</Typography>
           </a>
        </CardContent>
      </Card>
    </Grid>
    );
 };
export default Home;