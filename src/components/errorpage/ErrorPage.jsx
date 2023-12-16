import { Button, Container, Typography } from "@mui/material";
import {Link, useParams} from "react-router-dom";
import Header from './../header/Header'

const ErrorPage = () => {
    
    const currentdata = {site:"/error"}
    return (
        <main>
        <Header/>
        <Container>
            <Typography variant="h1">
                Error 404
            </Typography>
            <Typography variant="h3">
                Page not found
            </Typography>
        </Container>
        </main>    
    )
};
export default ErrorPage;