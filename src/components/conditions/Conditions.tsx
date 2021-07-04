import { Box, Button, Chip, Divider, Grid, Input, InputAdornment, makeStyles, Typography, useTheme } from "@material-ui/core";
import { Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import IConditionsProps from "./ConditionsProps";
import * as yup from "yup";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    cap:{
        "text-transform": "capitalize"
    }
});

function Conditions({
    availableConditions,
    selectedConditions,
    onNext,
    onBack
}: IConditionsProps) {
    const { t } = useTranslation();
    const [filter, setFilter] = useState("");
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Formik
            initialValues={selectedConditions}
            onSubmit={onNext}
            validationSchema={yup.array().required().oneOf([], "Error")}
        >
            {({ values, setValues, handleSubmit }) =>
                <>


                    <Grid container spacing={2}>
                        <Grid item container spacing={2} justify="space-between">
                            <Grid item xs={6}>
                                <Typography variant="h5" color="primary">{t("page.conditions.title")}</Typography>
                            </Grid>
                            <Grid item container xs={6} justify="flex-end">
                                <Grid item>
                                    <Input
                                        color="secondary"
                                        startAdornment={<InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>}
                                        placeholder="Search..."
                                        onChange={e => {
                                            setFilter(e.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{t("page.conditions.subtitle")}</Typography>
                            </Grid>
                        </Grid>


                        {Object.keys(availableConditions).map(conditionType => {
                            const filteredConditions = availableConditions[conditionType]
                                .filter(val => !filter || val.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

                            if (filteredConditions.length > 0) {
                                return (
                                    <Grid key={conditionType} container item xs={12} spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography className={classes.cap} variant="h6" color="secondary">{conditionType}</Typography>
                                            <Divider />
                                        </Grid>
                                        {filteredConditions
                                            .map(condition =>
                                                <Grid key={condition} item>
                                                    <Box onClick={() => {
                                                        if(values.includes(condition)){
                                                            setValues(values.filter(entry => entry !== condition))
                                                        }else{
                                                            setValues(values.concat(condition));
                                                        }
                                                    }}>
                                                        <Chip
                                                            label={condition}
                                                            clickable
                                                            variant="outlined"
                                                            style={values.includes(condition) ? {backgroundColor:theme.palette.grey[300]} : undefined}
                                                        />
                                                    </Box>
                                                </Grid>
                                            )}
                                    </Grid>
                                )
                            }
                            
                            return undefined;

                        })}

                        <Grid container item spacing={2} xs={12} justify="space-between">
                            <Grid item>
                                <Button onClick={onBack}>
                                    {t("page.common.back")}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button color="primary" variant="contained" onClick={() => handleSubmit()}>
                                    {t("page.common.next")}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </Formik>
    )
}

export default Conditions;