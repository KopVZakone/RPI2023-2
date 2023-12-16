import {Box, Container, Typography } from "@mui/material";
import Header from './../header/Header'
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
    
    const {t} = useTranslation();
    return (
        <main>
        <Header/>
        <Box
        display={"flex"}
        flexDirection={"column"}
        >
            <Typography variant="h1" alignSelf={"center"}>
                Error 404
            </Typography>
            <Typography variant="h3"  alignSelf={"center"}>
                {t("error.pageNotFound")}
            </Typography>
        </Box>
        </main>    
    )
};
export default ErrorPage;