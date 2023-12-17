import {Box, Container, Typography } from "@mui/material";
import Header from './../header/Header'
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
    
    const {t} = useTranslation();
    return (
        <main>
        <Header/>
            <Container
            display={"flex"}
            flexDirection={"column"}
            >
                <Typography variant="h1" textAlign={"center"}>
                    Error 404
                </Typography>
                <Typography variant="h3"  textAlign={"center"}>
                    {t("error.pageNotFound")}
                </Typography>
            </Container>
        </main>    
    )
};
export default ErrorPage;