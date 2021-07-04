import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

function useMedicalQuestionaireValidation() {
    const {t} = useTranslation();

    return yup.object().shape({
        smokes: yup.string().min(1, t("validation.questionaire.smokes.min")),
        drinks: yup.string().min(1, t("validation.questionaire.drinks.min")),
        drugs: yup.string().min(1, t("validation.questionaire.drugs.min")),
        medications: yup.string(),
        medicationAllergies: yup.string(),
        surgeries: yup.string()
      });
}

export default useMedicalQuestionaireValidation;