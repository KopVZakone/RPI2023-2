import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Grid, CardMedia, CardContent, CardActions, Container, Button, Card, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../header/Header";

const HeroSearch = (props) => {

    const { heroData } = props;
    const { t, i18n} = useTranslation();
    const lang = i18n.language;
    const filteredHeroData = heroData.filter((hero)=>{return });
    return (
        <main>
            <Header/>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {t("search.listTitle")}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {t("search.listDescription")}
                    </Typography>
                </Container>
            </Box>
            <TextField id="standard-basic" label="Поиск" variant="standard" onChange={()=>{}}/>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {heroData.map((hero) => (
                        <Grid item key={hero} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={hero.photo.src}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {hero.name.get(lang)}
                                    </Typography>
                                    <Typography>
                                        {hero.inf.get(lang)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        href={`/hero/${hero.id_Hero}`}
                                        size="small">{t("search.seeMoreButton")}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
export default HeroSearch;