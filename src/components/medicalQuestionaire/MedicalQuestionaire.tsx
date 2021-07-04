import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";
import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useMedicalQuestionaireValidation from "../../models/medicalQuestionaire/MedicalQuestionaireValidation";
import IMedicalQuestionaireProps from "./MedicalQuestionaireProps";

function MedicalQuestionaire({
    questionaire,
    onNext,
    onBack
}: IMedicalQuestionaireProps) {
    const { t } = useTranslation();
    const [showSmokes, setShowSmokes] = useState("no");
    const handleSmokes = (e: React.ChangeEvent<any>) => {
        if (e.target.value === "yes" && showSmokes === "no") {
            setShowSmokes("yes");
        } else if (e.target.value === "no" && showSmokes === "yes") {
            setShowSmokes("no");
        }
    }
    const [showDrinks, setShowDrinks] = useState("no");
    const handleDrinks = (e: React.ChangeEvent<any>) => {
        if (e.target.value === "yes" && showDrinks === "no") {
            setShowDrinks("yes");
        } else if (e.target.value === "no" && showDrinks === "yes") {
            setShowDrinks("no");
        }
    }

    const [showDrugs, setShowDrugs] = useState("no");
    const handleDrugs = (e: React.ChangeEvent<any>) => {
        if (e.target.value === "yes" && showDrugs === "no") {
            setShowDrugs("yes");
        } else if (e.target.value === "no" && showDrugs === "yes") {
            setShowDrugs("no");
        }
    }

    return (
        <Formik
            initialValues={questionaire}
            validationSchema={useMedicalQuestionaireValidation()}
            onSubmit={onNext}
        >
            {({ values, touched, errors, handleChange, handleBlur, setFieldValue, handleSubmit }) =>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography color="primary" variant="h5">{t("page.questionaire.title")}</Typography>
                    </Grid>
                    <Grid item container spacing={2} xs={12}>
                        <Grid item xs={10}>
                            <Typography>{t("label.questionaire.smokes")}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth component="fieldset">
                                <RadioGroup aria-label="smokes-control" name="smokes-control" value={showSmokes}
                                    onChange={event => {
                                        if (event.target.value === "no") {
                                            setFieldValue("smokes", undefined);
                                        }
                                        handleSmokes(event);
                                    }}>
                                    <FormControlLabel value="yes" control={<Radio />} label={t("page.common.yes")} />
                                    <FormControlLabel value="no" control={<Radio />} label={t("page.common.no")} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {showSmokes === "yes" &&
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="smokes"
                                    label={t("label.questionaire.activityDetails")}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.smokes && (errors.smokes?.length ?? 0) > 0}
                                    helperText={touched.smokes && errors.smokes}
                                    value={values.smokes}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                        }
                    </Grid>

                    <Grid item container spacing={2} xs={12}>
                        <Grid item xs={10}>
                            <Typography>{t("label.questionaire.drinks")}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth component="fieldset">
                                <RadioGroup aria-label="drinks-control" name="drinks-control" value={showDrinks}
                                    onChange={event => {
                                        if (event.target.value === "no") {
                                            setFieldValue("drinks", undefined);
                                        }
                                        handleDrinks(event);
                                    }}>
                                    <FormControlLabel value="yes" control={<Radio />} label={t("page.common.yes")} />
                                    <FormControlLabel value="no" control={<Radio />} label={t("page.common.no")} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {showDrinks === "yes" &&
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="drinks"
                                    label={t("label.questionaire.activityDetails")}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.drinks && (errors.drinks?.length ?? 0) > 0}
                                    helperText={touched.drinks && errors.drinks}
                                    value={values.drinks}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                        }
                    </Grid>

                    <Grid item container spacing={2} xs={12}>
                        <Grid item xs={10}>
                            <Typography>{t("label.questionaire.drugs")}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth component="fieldset">
                                <RadioGroup aria-label="drugs-control" name="drugs-control" value={showDrugs}
                                    onChange={event => {
                                        if (event.target.value === "no") {
                                            setFieldValue("drugs", undefined);
                                        }
                                        handleDrugs(event);
                                    }}>
                                    <FormControlLabel value="yes" control={<Radio />} label={t("page.common.yes")} />
                                    <FormControlLabel value="no" control={<Radio />} label={t("page.common.no")} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {showDrugs === "yes" &&
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="drugs"
                                    label={t("label.questionaire.activityDetails")}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.drugs && (errors.drugs?.length ?? 0) > 0}
                                    helperText={touched.drugs && errors.drugs}
                                    value={values.drugs}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                        }
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="medications"
                            label={t("label.questionaire.medications")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.medications && (errors.medications?.length ?? 0) > 0}
                            helperText={touched.medications && errors.medications}
                            value={values.medications}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="medicationAllergies"
                            label={t("label.questionaire.allergies")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.medicationAllergies && (errors.medicationAllergies?.length ?? 0) > 0}
                            helperText={touched.medicationAllergies && errors.medicationAllergies}
                            value={values.medicationAllergies}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="surgeries"
                            label={t("label.questionaire.surgeries")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.surgeries && (errors.surgeries?.length ?? 0) > 0}
                            helperText={touched.surgeries && errors.surgeries}
                            value={values.surgeries}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

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
            }

        </Formik>
    )
}

export default MedicalQuestionaire;