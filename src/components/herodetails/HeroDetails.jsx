import {Link, useParams} from "react-router-dom";
import {Box, Container, ImageList, ImageListItem, ImageListItemBar, List, ListItem, Stack, Typography} from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Header from './../header/Header'
import ErrorPage from './../errorpage/ErrorPage'
import { useTranslation } from "react-i18next";
const HeroDetails = (props) => {
    const {heroData} = props;
    const {id} = useParams();
    const { t, i18n} = useTranslation();
    const lang = i18n.language;
    const hero = heroData.find((hero)=> hero.id_Hero === Number(id));
    if (!hero)
        return <ErrorPage/>
    return (
        <main>
        <Header/>    
        <Stack         
        direction="row-reverse"
        justifyContent="space-around"
        flexWrap="wrap"
        spacing={2}
        >
            <Box
                component="img"
                sx={{
                    maxHeight:500
                }}
                alignSelf="center"
                src={hero.photo.src}
                alt={hero.photo.alt.get(lang)}
            />
            <Stack 
            direction="column"
            alignItems="center"
            spacing={2}
            >
                <Typography variant="h3">
                    {hero.name.get(lang)}
                </Typography>  
                <Typography variant="h5">
                    {hero.yearsOfLife.get(lang)}
                </Typography>   
                <Typography variant="p" maxWidth={600}>
                    {hero.inf.get(lang)}
                </Typography>
                {/* <Box>
                    <List>
                        <ListItem>
                            <Link component="a" href="#biography">
                                {t("hero.biography")}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link component="a" href="#chronography">
                                {t("hero.chronography")}
                            </Link>
                        </ListItem>
                    </List>
                </Box> */}
            </Stack>
        </Stack>
        <Container id="biography">
            <Typography variant="h4" textAlign="center">
                {t("hero.biography")}
            </Typography>
            <Box>
                {hero.biography.get(lang).map((data)=>(
                    <p>{data}</p>    
                ))}
            </Box>
        </Container>
        <Box id="chronography">
            <Typography variant="h4" textAlign="center">
                {t("hero.chronography")}
            </Typography>
            <Timeline>
                {hero.сhronography.map((data)=>(
                  <TimelineItem>
                    <TimelineOppositeContent>
                        {data.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {data.event.get(lang)}    
                    </TimelineContent>
                  </TimelineItem>  
                ))}
            </Timeline>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" textAlign="center">
                {t("hero.gallery")}
            </Typography>
            <ImageList sx={{ width: 900, height: 600 }} cols={1}>
                {hero.photoGallery.map((data)=>(    
                    <ImageListItem height={700}>
                        <img
                            src={data.src}
                            alt={data.alt.get(lang)}
                        />
                        <ImageListItemBar title={data.alt.get(lang)}/>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        <Box
            minHeight={300}
        >
            <Typography variant="h4" textAlign="center">
                {hero.youtubeVideo.title.get(lang)}        
            </Typography> 
            <center>
                <iframe     
                    width={900} 
                    height={700}              
                    src={`https://www.youtube.com/embed/${hero.youtubeVideo.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </center>
        </Box>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h4" textAlign="center">
                {t("hero.map")}
            </Typography>
            <YMaps>
                <div>
                    <Map height="500px" width="1000px" defaultState={{ center: [34.1495070358921, -118.33776346064823], zoom: 17 }}>
                    <Placemark geometry={[34.1495070358921, -118.33776346064823]} />
                    </Map>
                </div>
            </YMaps>
        </Box>
        </main>
    )
};

export default HeroDetails;