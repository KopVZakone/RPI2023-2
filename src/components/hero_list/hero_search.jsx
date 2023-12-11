import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Grid, CardMedia, CardContent, CardActions, Container, Button, Card } from "@mui/material";

const HeroSearch = (props) => {
    const navigate = useNavigate();
    const { heroData } = props;
    const { lang } = useParams();

    return (
        <main>
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
                        List of heroes
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Choose a hero according to your taste
                    </Typography>
                </Container>
            </Box>
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
                                    image={hero.photo}
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
                                    <Button onClick={() => {
                                        navigate(`/${lang}/hero/${hero.id_Hero}`)
                                    }}
                                        size="small">See more</Button>
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