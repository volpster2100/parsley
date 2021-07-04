import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

function useAddressValidation() {
    const { t } = useTranslation();

    return yup.object().shape({
        street: yup.string()
            .required(t("validation.demographics.address.street.required"))
            .min(2, t("validation.demographics.address.street.min"))
            .max(50, t("validation.demographics.address.street.max")),
        city: yup.string()
            .required(t("validation.demographics.address.city.required"))
            .min(2, t("validation.demographics.address.city.min"))
            .max(50, t("validation.demographics.address.city.max")),
        state: yup.string()
            .required(t("validation.demographics.address.state.required"))
            .length(2, t("validation.demographics.address.state.length")),
        zip: yup.string()
            .required(t("validation.demographics.address.zip.required"))
            .min(5, t("validation.demographics.address.zip.min"))
            .max(50, t("validation.demographics.address.zip.max")),
    });
}

export default useAddressValidation;