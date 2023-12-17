import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n} = useTranslation();
    return (
        <header>  
            <center>
                <Box 
                    display={"flex"} 
                    flexDirection={"row-reverse"} 
                    maxWidth="1200px"
                    sx={{
                        backgroundColor:"#e3cece"
                    }}
                >   
                    <Box>
                        <Button 
                            onClick={()=>i18n.changeLanguage("en")} 
                            sx={{color: 'common.black'}}
                        >
                            en
                        </Button>
                        <Button 
                            onClick={()=>i18n.changeLanguage("ru")} 
                            sx={{color: 'common.black'}}
                        >
                            ru
                        </Button>
                    </Box> 
                    <Box> 
                        <Button href={`/`} sx={{pr:6, color: 'common.black'}}>
                            {t("header.mainPage")}
                        </Button>   
                        <Button href={`/search`} sx={{pr:6, color: 'common.black'}}>
                            {t("header.search")}
                        </Button>                     
                    </Box> 
                </Box>   
            </center> 
        </header>    
    )
};
export default Header;