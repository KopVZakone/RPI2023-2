import {Link, useParams} from "react-router-dom";
import {Box, Container, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
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
                    height:400,
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
                <Typography variant="h4">
                    {hero.name.get(lang)}
                </Typography>  
                <Typography variant="h5">
                    {hero.yearsOfLife.get(lang)}
                </Typography>   
                <Typography variant="p" maxWidth={600}>
                    {hero.inf.get(lang)}
                </Typography>
            </Stack>
        </Stack>
        <Container>
            <Typography variant="h4" textAlign="center">
                {t("hero.biography")}
            </Typography>
            <Box>
                {hero.biography.get(lang).map((data)=>(
                    <p>{data}</p>    
                ))}
            </Box>
        </Container>
        <Box>
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
        <Box>
            <Typography variant="h4" textAlign="center">
                {t("hero.gallery")}
            </Typography>
            <ImageList>
                {hero.photoGallery.map((data)=>(
                    <ImageListItem>
                        <img
                            src={data.src}
                            alt={data.alt.get(lang)}
                        />
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
                    src={`https://www.youtube.com/embed/${hero.youtubeVideo.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </center>
        </Box>
        <Box>
            <Typography variant="h4" textAlign="center">
                {t("hero.map")}
            </Typography>
            <YMaps>
                <div>
                    <Map height="500px" width="500px" defaultState={{ center: [34.1495070358921, -118.33776346064823], zoom: 17 }}>
                    <Placemark geometry={[34.1495070358921, -118.33776346064823]} />
                    </Map>
                </div>
            </YMaps>
        </Box>
        </main>
    )
};
export default HeroDetails;