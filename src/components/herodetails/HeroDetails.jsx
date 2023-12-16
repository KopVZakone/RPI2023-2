import {Link, useParams} from "react-router-dom";
import {Box, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
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
            />
            <Stack 
            direction="column"
            alignItems="center"
            spacing={2}
            >
                <Typography
                    component="h1"
                >
                    {hero.name.get(lang)}
                </Typography>  
                <Typography
                    component="h2"
                >
                    {hero.yearsOfLife.get(lang)}
                </Typography>   
                <Typography
                    component="h3"
                    maxWidth={400}
                >
                    {hero.inf.get(lang)}
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Typography>
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
            <Typography>
                {t("hero.gallery")}
            </Typography>
            <ImageList>
                {hero.photoGallery.map((data)=>(
                    <ImageListItem>
                        <img
                            src={data.src}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        <Box
            minHeight={300}
        >
            <Typography>
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
            <Typography>
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