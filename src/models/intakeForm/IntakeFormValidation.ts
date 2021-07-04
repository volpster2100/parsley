import * as yup from 'yup';
import useDemographicsValidation from '../demographics/DemographicsValidation';
import useMedicalQuestionaireValidation from '../medicalQuestionaire/MedicalQuestionaireValidation';

function useIntakeFormValidation() {
    return yup.object().shape({
        demographics: useDemographicsValidation().required(),
        conditions:yup.array().required(),
        questionaire: useMedicalQuestionaireValidation().required()
      });
}

export default useIntakeFormValidation;