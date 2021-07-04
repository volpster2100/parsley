import IDemographics from "../demographics/IDemographics";
import IMedicalQuestionaire from "../medicalQuestionaire/IMedicalQuestionaire";

export default interface IIntakeForm {
    demographics: IDemographics;
    conditions: string[];
    questionaire: IMedicalQuestionaire;
}