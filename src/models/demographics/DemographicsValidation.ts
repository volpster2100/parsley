import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import useAddressValidation from '../address/AddressValidation';
import * as libphone from 'libphonenumber-js'

function useDemographicsValidation() {
    const { t } = useTranslation();

    return yup.object().shape({
        firstName: yup.string()
            .required(t("validation.demographics.firstName.required"))
            .min(2, t("validation.demographics.firstName.min"))
            .max(50, t("validation.demographics.firstName.max")),
        lastName: yup.string()
            .required(t("validation.demographics.lastName.required"))
            .min(2, t("validation.demographics.lastName.min"))
            .max(50, t("validation.demographics.lastName.max")),
        gender: yup.string()
            .required(t("validation.demographics.gender.required"))
            .min(2, t("validation.demographics.gender.min"))
            .max(50, t("validation.demographics.gender.max")),
        dateOfBirth: yup.string()
            .required(t("validation.demographics.dateOfBirth.required"))
            .min(2, t("validation.demographics.dateOfBirth.min"))
            .max(50, t("validation.demographics.dateOfBirth.max")),
        email: yup.string()
            .email(t("validation.demographics.email.invalid"))
            .required(t("validation.demographics.email.required"))
            .min(2, t("validation.demographics.email.min"))
            .max(50, t("validation.demographics.email.max")),
        phone: yup.string()
            .required(t("validation.demographics.phone.required"))
            .test("phone-test", t("validation.demographics.phone.invalid"), value => {
                if (!value) {
                    return true;
                }

                try {
                    const phoneNumber = libphone.parsePhoneNumber(value);
                    return phoneNumber.isValid()
                } catch {
                    return false;
                }
            }),
        address: useAddressValidation(),
        maritalStatus: yup.string()
            .required(t("validation.demographics.maritalStatus.required"))
            .oneOf(["Married", "Single", "Divorced", "Life Partner", "Separated", "Widowed", "Other"], t("validation.demographics.maritalStatus.invalid"))
    });
}

export default useDemographicsValidation;