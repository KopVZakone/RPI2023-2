import {Link, useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
///import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react'

const HeroDetails = (props) => {
    const key = "ru";
    const {heroData} = props;
    const {id} = useParams();
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
             {/* <Timeline >
                {hero.en_biography.map((data)=>(
                    <TimelineItem
                        key={data.id}
                        dateText={data.year}
                    >
                     <p>{data.event}</p> 
                    </TimelineItem>  
                ))   
            </Timeline>  */}
        </Box>
        </main>
    )
};
export default HeroDetails;