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
            sx={{
                bgcolor:'grey.300',
                p:5
            }}
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
            </Stack>
        </Stack>
        <Container  
            sx={{bgcolor:'grey.300',
                p:5
            }}
        >
            <Typography variant="h4" textAlign="center">
                {t("hero.biography")}
            </Typography>
            <Box>
                {hero.biography.get(lang).map((data)=>(
                    <p>{data}</p>    
                ))}
            </Box>
        </Container>
        <Container
            sx={{bgcolor:'grey.300',
                pt:5,
                pb:5
            }}
        >
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
        </Container>
        <Container
            sx={{bgcolor:'grey.300',
                p:5
            }}
        >
            <Typography variant="h4" textAlign="center">
                {t("hero.gallery")}
            </Typography>
            <ImageList sx={{ maxWidth: 900, height: 600, m:"auto"}} cols={1}>
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
        </Container>
        <Container
            sx={{
                bgcolor:'grey.300',
                p:5
            }}
        >
            <Typography variant="h4" textAlign="center">
                {hero.youtubeVideo.title.get(lang)}        
            </Typography> 
            <Box             
            sx={{
                pt:5
            }}>
                <iframe     
                    width="100%" 
                    height={700}              
                    src={`https://www.youtube.com/embed/${hero.youtubeVideo.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </Box>
        </Container>
        <Container 
            sx={{
                bgcolor:'grey.300',
                p:5
            }}
        >
            <Typography variant="h4" textAlign="center">
                {t("hero.map")}
            </Typography>
            <Box maxHeight="500px" maxWidth="1000px" sx={{m:"auto"}}>
                <YMaps>
                    <Map height="100%" width="100%" defaultState={{ center: [34.1495070358921, -118.33776346064823], zoom: 17 }}>
                        <Placemark geometry={[34.1495070358921, -118.33776346064823]} />
                    </Map>
                </YMaps>    
            </Box>
            
        </Container>
        </main>
    )
};

export default HeroDetails;