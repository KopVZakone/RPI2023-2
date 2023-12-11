import {Link, useParams} from "react-router-dom";
import {Box, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Container } from "@mui/system";

const HeroDetails = (props) => {
    const {heroData} = props;
    const {lang,id} = useParams();
    const key = lang;
    const hero = heroData.find((hero)=> hero.id_Hero === Number(id));
    if (!hero)
        return <div>error{Number(id)}</div>
    return (
        <main>
        <Stack         
        direction="row-reverse"
        justifyContent="space-around"
        flexWrap="wrap"
        spacing={2}
        >
            <Box
                component="img"
                sx={{
                    width:300,
                }}
                alignSelf="center"
                src={hero.photo}
            />
            <Stack 
            direction="column"
            alignItems="center"
            spacing={2}
            >
                <Typography
                    component="h1"
                >
                    {hero.name.get(key)}
                </Typography>  
                <Typography
                    component="h2"
                >
                    {hero.yearsOfLife.get(key)}
                </Typography>   
                <Typography
                    component="h3"
                >
                    {hero.inf.get(key)}
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Timeline>
                {hero.biography.map((data)=>(
                  <TimelineItem>
                    <TimelineOppositeContent>
                        {data.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {data.event.get(key)}    
                    </TimelineContent>
                  </TimelineItem>  
                ))}
            </Timeline>
        </Box>
        <Box>
            <ImageList>
                {hero.photoGallery.map((data)=>(
                    <ImageListItem>
                        <img
                            src={data}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        <Box
            minHeight={300}
        >
            <center>
                <iframe                    
                    src={`https://www.youtube.com/embed/${hero.youtubeVideo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </center>
        </Box>
        <Box>
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