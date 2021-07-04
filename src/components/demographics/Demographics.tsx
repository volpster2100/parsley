import { Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import useDemographicsValidation from "../../models/demographics/DemographicsValidation";
import { IDemographicsProps } from "./DemographicsProps";

function Demographics({
    demographics,
    onNext
}: IDemographicsProps) {
    const { t } = useTranslation();

    const maritalStatusOptions = ["Married", "Single", "Divorced", "Life Partner", "Separated", "Widowed", "Other"];

    return (
        <Formik
            initialValues={demographics}
            validationSchema={useDemographicsValidation()}
            onSubmit={onNext}
        >
            {({
                values,
                touched,
                errors,
                isValid,
                dirty,
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit
            }) =>
                <>
                    <Typography variant="h5" color="primary">{t("page.demographics.title")}</Typography>

                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="firstName"
                                label={t("label.demographics.firstName")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.firstName && (errors.firstName?.length ?? 0) > 0}
                                helperText={touched.firstName && errors.firstName}
                                value={values.firstName}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="lastName"
                                label={t("label.demographics.lastName")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.lastName && (errors.lastName?.length ?? 0) > 0}
                                helperText={touched.lastName && errors.lastName}
                                value={values.lastName}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                type="tel"
                                name="phone"
                                label={t("label.demographics.phone")}
                                onChange={event => {
                                    if (!event.target.value) {
                                        setFieldValue("phone", "");
                                        return;
                                    }

                                    const nanCheck = parseInt(event.target.value);
                                    if (isNaN(nanCheck)) {
                                        return;
                                    }

                                    setFieldValue("phone", `+1${nanCheck}`)
                                }}
                                onBlur={handleBlur}
                                error={touched.phone && (errors.phone?.length ?? 0) > 0}
                                helperText={touched.phone && errors.phone}
                                value={values.phone.replace("+1", "")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+1</InputAdornment>
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="email"
                                label={t("label.demographics.email")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && (errors.email?.length ?? 0) > 0}
                                helperText={touched.email && errors.email}
                                value={values.email}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="address.street"
                                label={t("label.demographics.address.street")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.address?.street && (errors.address?.street?.length ?? 0) > 0}
                                helperText={touched.address?.street && errors.address?.street}
                                value={values.address.street}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="address.city"
                                label={t("label.demographics.address.city")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.address?.city && (errors.address?.city?.length ?? 0) > 0}
                                helperText={touched.address?.city && errors.address?.city}
                                value={values.address.city}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={2} xs={6}>
                            <TextField
                                fullWidth
                                name="address.state"
                                label={t("label.demographics.address.state")}
                                onChange={event => {
                                    if (event.target.value?.length > 2) {
                                        return;
                                    }

                                    setFieldValue("address.state", event.target.value.toUpperCase())
                                }}
                                onBlur={handleBlur}
                                error={touched.address?.state && (errors.address?.state?.length ?? 0) > 0}
                                helperText={touched.address?.state && errors.address?.state}
                                value={values.address.state}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={4} xs={6}>
                            <TextField
                                fullWidth
                                name="address.zip"
                                label={t("label.demographics.address.zip")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.address?.zip && (errors.address?.zip?.length ?? 0) > 0}
                                helperText={touched.address?.zip && errors.address?.zip}
                                value={values.address.zip}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="dateOfBirth"
                                label={t("label.demographics.dateOfBirth")}
                                type="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.dateOfBirth && (errors.dateOfBirth?.length ?? 0) > 0}
                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                                value={values.dateOfBirth}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <TextField
                                fullWidth
                                name="gender"
                                label={t("label.demographics.gender")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.gender && (errors.gender?.length ?? 0) > 0}
                                helperText={touched.gender && errors.gender}
                                value={values.gender}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <FormControl
                                fullWidth
                                error={touched.gender && (errors.gender?.length ?? 0) > 0}
                            >
                                <InputLabel shrink id="marital-status-label">{t("label.demographics.maritalStatus")}</InputLabel>
                                <Select
                                    labelId="marital-status-label"
                                    name="maritalStatus"
                                    value={values.maritalStatus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {maritalStatusOptions.map((status) => (
                                        <MenuItem key={status} value={status}>
                                            {status}
                                        </MenuItem>
                                    ))}
                                </Select>                                
                                {touched.gender && errors.gender &&
                                    <FormHelperText error>{errors.gender}</FormHelperText>
                                }
                            </FormControl>
                        </Grid>
                        <Grid container item spacing={2} xs={12} justify="flex-end">
                            <Grid item>
                                <Button color="primary" variant="contained" onClick={() => handleSubmit()}>
                                    {t("page.common.next")}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </>}
        </Formik>
    )
}

export default Demographics;