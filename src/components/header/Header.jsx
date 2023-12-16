import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n} = useTranslation();
    return (
        <header>            
            <Button variant="text"
            href={`/`}
            >
            {t("header.mainPage")}
            </Button>
            <Button
            href={`/search`}
            >
            {t("header.search")}
            </Button> 
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
        </header>    
    )
};
export default Header;