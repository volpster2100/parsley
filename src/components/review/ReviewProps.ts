import IIntakeForm from "../../models/intakeForm/IIntakeForm";

export default interface IReviewProps {
    intake:IIntakeForm;
    inReview:boolean;
    setInReview:(inReviewValaue:boolean) => void;
    goToStep:(step:number) => void;
}