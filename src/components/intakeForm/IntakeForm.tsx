import { useState } from 'react';
import Container from '@material-ui/core/Container'
import { Formik } from 'formik';
import IIntakeForm from '../../models/intakeForm/IIntakeForm';
import Demographics from '../demographics/Demographics';
import Conditions from '../conditions/Conditions';
import MedicalQuestionaire from '../medicalQuestionaire/MedicalQuestionaire';
import Review from '../review/Review';
import { Box, Paper, useTheme } from '@material-ui/core';
import useIntakeFormValidation from '../../models/intakeForm/IntakeFormValidation';
import IIntakeFormProps from './IntakeFormProps';
import Terms from '../terms/Terms';
import Done from '../done/Done';

const initialIntake: IIntakeForm = {
    demographics: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        address: {
            city: "",
            state: "",
            street: "",
            zip: ""
        },
        gender: "",
        maritalStatus: ""
    },
    conditions: [],
    questionaire: {
        medicationAllergies: "",
        medications: "",
        surgeries: ""
    }
};

function IntakeForm({
    availableConditions
}: IIntakeFormProps) {
    const [inReview, setInReview] = useState(false);

    const [step, setStep] = useState(1);
    const nextStep = () => {
        if (step >= 5) {
            return
        }

        if (inReview) {
            setStep(4);
        } else {
            setStep(step + 1);
        }
    }
    const previousStep = () => {
        if (step <= 1) {
            return;
        }

        if (inReview) {
            setStep(4);
        } else {
            setStep(step - 1);
        }
    }
    const goToStep = (step: number) => {
        if (step > 0 && step < 7) {
            setStep(step);
        }
    }

    const theme = useTheme();

    return (
        <Container maxWidth="sm" disableGutters>
            <Paper variant="outlined">
                <Box
                    p={theme.spacing(2, 4)}
                >
                    <Formik
                        initialValues={initialIntake}
                        onSubmit={intake => {
                            console.log(intake);
                        }}
                        validationSchema={useIntakeFormValidation()}
                    >
                        {(formik) =>
                            <>
                                {step === 1 &&
                                    <Demographics
                                        demographics={formik.values.demographics}
                                        onNext={demographicData => {
                                            formik.setFieldValue("demographics", demographicData);
                                            nextStep();
                                        }}
                                    />
                                }
                                {step === 2 &&
                                    <Conditions
                                        selectedConditions={formik.values.conditions}
                                        availableConditions={availableConditions}
                                        onNext={selectedConditions => {
                                            formik.setFieldValue("conditions", selectedConditions);
                                            nextStep();
                                        }}
                                        onBack={previousStep}
                                    />
                                }
                                {step === 3 &&
                                    <MedicalQuestionaire
                                        questionaire={formik.values.questionaire}
                                        onNext={completedQuestionaire => {
                                            formik.setFieldValue("questionaire", completedQuestionaire);
                                            nextStep();
                                        }}
                                        onBack={previousStep}
                                    />
                                }

                                {step === 4 &&
                                    <Review
                                        goToStep={goToStep}
                                        inReview={inReview}
                                        intake={formik.values}
                                        setInReview={setInReview}
                                    />}

                                {step === 5 &&
                                    <Terms
                                        onAccept={() => {
                                            setStep(6);
                                            console.log(formik.values);
                                        }}
                                    />
                                }

                                {step === 6 && <Done />}
                            </>
                        }
                    </Formik>
                </Box>
            </Paper>
        </Container>
    );
}

export default IntakeForm;
