import ICondition from "../../models/condition/ICondition";

export default interface IConditionsProps {
    selectedConditions:string[];
    availableConditions:{[type:string]:string[]};
    onNext:(conditions:string[]) => void;
    onBack:() => void;
}