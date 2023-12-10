import {Link, useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
///import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react'

const HeroDetails = (props) => {
    const key = "ru";
    const {heroData} = props;
    const {id_Hero} = useParams();
    const hero = heroData.find((hero)=> hero.id_Hero === Number(id_Hero));
    if (!hero)
        return <div>error</div>
    return (
        <main>
        <Box 
        component="div"
        display="flex"
        flexDirection={"row-reverse"}
        flexWrap={"nowrap"}
        >
            <Box
                component="img"
                sx={{
                    height:200,
                    width:300
                }}
                src={hero.photo}
            />
            <Box>
                <Typography
                    component="h2"
                    align="center"
                >
                    {hero.name}
                </Typography>  
                <Typography
                    component="h2"
                    align="center"
                >
                    {hero.yearsOfLife}
                </Typography>   
                <Typography
                    component="h3"
                    align="center"
                >
                    {hero.info}
                </Typography>
            </Box>
        </Box>
        <Box>
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