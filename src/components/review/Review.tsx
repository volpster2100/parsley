import { Box, Button, Chip, Divider, Grid, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import IDemographics from "../../models/demographics/IDemographics";
import IReviewProps from "./ReviewProps";

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: theme.spacing(2)
    }
}));

function Review({
    intake,
    inReview,
    setInReview,
    goToStep
}: IReviewProps) {
    const { t } = useTranslation();
    const classes = useStyles();

    useEffect(() => {
        if (!inReview) {
            setInReview(true);
        }
    }, [])

    const getFullAddress = (demographics: IDemographics): string => {
        const address = demographics.address;
        return `${address.street}, ${address.city}, ${address.city}, ${address.zip}`;
    }

    return (
        <>
            <Typography variant="h5" color="primary">{t("page.review.title")}</Typography>
            <Typography variant="subtitle2" >{t("page.review.subtitle")}</Typography>

            <Paper variant="outlined" className={classes.card}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item container xs={12} spacing={1}>
                            <Grid item xs={10}>
                                {t("page.demographics.title")}
                            </Grid>
                            <Grid container item xs justify="flex-end">
                                <Link onClick={() => goToStep(1)}>{t("page.common.edit")}</Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>{/*personal info header*/}

                        <Grid item container xs={12}>
                            <Grid item container xs={4} direction="column">
                                <Grid item>{t("label.demographics.firstName")}</Grid>
                                <Grid item>{t("label.demographics.lastName")}</Grid>
                                <Grid item>{t("label.demographics.phone")}</Grid>
                                <Grid item>{t("label.demographics.email")}</Grid>
                                <Grid item>{t("label.demographics.address.full")}</Grid>
                                <Grid item>{t("label.demographics.dateOfBirth")}</Grid>
                                <Grid item>{t("label.demographics.gender")}</Grid>
                                <Grid item>{t("label.demographics.maritalStatus")}</Grid>
                            </Grid>
                            <Grid item container xs={8} direction="column">
                                <Grid item>{intake.demographics.firstName}</Grid>
                                <Grid item>{intake.demographics.lastName}</Grid>
                                <Grid item>{intake.demographics.phone}</Grid>
                                <Grid item>{intake.demographics.email}</Grid>
                                <Grid item>{getFullAddress(intake.demographics)}</Grid>
                                <Grid item>{intake.demographics.dateOfBirth}</Grid>
                                <Grid item>{intake.demographics.gender}</Grid>
                                <Grid item>{intake.demographics.maritalStatus}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>{/*personal info wrapper container*/}
                </Box>
            </Paper>

            <Paper variant="outlined" className={classes.card}>
                <Box p={2}>
                    <Grid container spacing={2} xs={12}>
                        <Grid item container xs={12} spacing={1}>
                            <Grid item xs={10}>
                                {t("page.conditions.title")}
                            </Grid>
                            <Grid container item xs justify="flex-end">
                                <Link onClick={() => goToStep(2)}>{t("page.common.edit")}</Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>{/*conditions header*/}

                        <Grid item container xs={12}>
                            <Grid item container xs={12}>
                                <Grid item>{t("page.conditions.selected")}</Grid>
                            </Grid>
                            <Grid item container spacing={1} xs={12}>
                                {intake.conditions.map(condition =>
                                    <Grid item key={condition}>
                                        <Chip
                                            label={condition}
                                            variant="outlined"
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>{/*conditions wrapper container*/}
                </Box>
            </Paper>

            <Paper variant="outlined" className={classes.card}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item container xs={12} spacing={1}>
                            <Grid item xs={10}>
                                {t("page.questionaire.title")}
                            </Grid>
                            <Grid container item xs justify="flex-end">
                                <Link onClick={() => goToStep(3)}>{t("page.common.edit")}</Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>{/*questionaire header*/}

                        <Grid item container xs={12} spacing={1}>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.smokes")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.smokes ?? t("page.common.no")}</Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.drinks")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.drinks ?? t("page.common.no")}</Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.drugs")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.drugs ?? t("page.common.no")}</Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.medications")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.medications ?? t("page.common.none")}</Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.allergies")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.medicationAllergies ?? t("page.common.none")}</Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={8}>{t("label.questionaire.surgeries")}</Grid>
                                <Grid item xs={4}>{intake.questionaire.surgeries ?? t("page.common.none")}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>{/*questionaire wrapper container*/}
                </Box>
            </Paper>

            <Box mt={2}>
                <Grid container justify="space-evenly">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => goToStep(5)}
                        >
                            {t("page.common.next")}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Review;