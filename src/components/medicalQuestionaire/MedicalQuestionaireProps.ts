import IMedicalQuestionaire from "../../models/medicalQuestionaire/IMedicalQuestionaire";

export default interface IMedicalQuestionaireProps{
    questionaire: IMedicalQuestionaire;
    onNext:(questionaire:IMedicalQuestionaire) => void;
    onBack:() => void;
}