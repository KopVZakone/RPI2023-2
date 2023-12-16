import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n} = useTranslation();
    return (
        <header>  
            <Box display={"flex"} flexDirection={"row-reverse"}>   
                <Box>
                    <Button
                    onClick={()=>i18n.changeLanguage("en")}
                    >
                        en
                    </Button>
                    <Button
                    onClick={()=>i18n.changeLanguage("ru")}
                    >
                        ru
                    </Button>
                </Box>       
                <Button href={`/search`} >
                    {t("header.search")}
                </Button> 
                <Button href={`/`}>
                {t("header.mainPage")}
                </Button>
            </Box>    
        </header>    
    )
};
export default Header;