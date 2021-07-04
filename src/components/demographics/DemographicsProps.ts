import IDemographics from "../../models/demographics/IDemographics";

export interface IDemographicsProps{
    demographics:IDemographics;
    onNext:(demographics:IDemographics) => void;
}