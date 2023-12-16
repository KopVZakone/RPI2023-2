import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n} = useTranslation();
    return (
        <header>  
            <Box display={"flex"} flexDirection={"row-reverse"}>   
                <Box>
                    <Button onClick={()=>i18n.changeLanguage("en")}>
                        en
                    </Button>
                    <Button onClick={()=>i18n.changeLanguage("ru")}>
                        ru
                    </Button>
                </Box> 
                <nav> 
                    <Button href={`/`}>
                        {t("header.mainPage")}
                    </Button>   
                    <Button href={`/search`} >
                        {t("header.search")}
                    </Button>                     
                </nav> 
            </Box>    
        </header>    
    )
};
export default Header;