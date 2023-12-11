import {Link, useParams} from "react-router-dom";
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
///import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react'

const HeroDetails = (props) => {
    const {heroData} = props;
    const {lang,id} = useParams();
    const key = lang;
    const hero = heroData.find((hero)=> hero.id_Hero === Number(id));
    if (!hero)
        return <div>error{Number(id)}</div>
    return (
        <main>
        <Box 
        component="div"
        display="flex"
        flexDirection={"row-reverse"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        >
            <Box
                component="img"
                sx={{
                    width:300,
                }}
                alignSelf="center"
                src={hero.photo}
            />
            <Box>
                <Typography
                    component="h2"
                    align="center"
                >
                    {hero.name.get(key)}
                </Typography>  
                <Typography
                    component="h2"
                    align="center"
                >
                    {hero.yearsOfLife.get(key)}
                </Typography>   
                <Typography
                    component="h3"
                    align="center"
                >
                    {hero.inf.get(key)}
                </Typography>
            </Box>
        </Box>
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
        <Box>
            <iframe
                width="80%"
                src={`https://www.youtube.com/embed/${hero.youtubeVideo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Box>
        </main>
    )
};
export default HeroDetails;