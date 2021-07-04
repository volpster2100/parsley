import { Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function Done(){
    const {t} = useTranslation();
    
    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h3" color="primary">
                    {t("page.done.title")}
                </Typography>
            </Grid>
            <Grid item>
                <Typography align="center">
                    {t("page.done.subtitle")}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Done;