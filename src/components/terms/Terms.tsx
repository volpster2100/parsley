import { Button, Checkbox, makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core"
import { useState } from "react";
import { useTranslation } from "react-i18next"
import ITermsProps from "./TermsProps";

const useStyles = makeStyles(theme => ({
    terms:{
        backgroundColor: theme.palette.background.default
    }
}))

function Terms({
    onAccept
}:ITermsProps){
    const {t} = useTranslation();
    const classes = useStyles();
    const [accepted, setAccepted] = useState(false);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" color="primary">{t("page.terms.title")}</Typography>
            </Grid>

            <Grid item xs={12} className={classes.terms}>
                <Typography component="div">
                    <p dangerouslySetInnerHTML={{__html:t("page.terms.terms")}}></p>
                </Typography>
            </Grid>

            <Grid item container xs={12} spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Checkbox
                        checked={accepted}
                        onClick={() => setAccepted(!accepted)}
                     />
                </Grid>
                <Grid item>
                    <Typography>{t("page.terms.acceptLabel")}</Typography>
                </Grid>
            </Grid>

            <Grid item container xs={12} justify="space-evenly" alignItems="center">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!accepted}
                    onClick={() => {
                        if(accepted){
                            onAccept();
                        }
                    }}
                >
                    {t("page.common.accept")}
                </Button>
            </Grid>
        </Grid>
    )
}

export default Terms;