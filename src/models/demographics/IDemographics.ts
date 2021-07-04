import IAddress from "../address/IAddress";

export default interface IDemographics{
    firstName:string;
    lastName:string;
    gender:string;
    dateOfBirth:string;
    email:string;
    phone:string;
    address:IAddress;
    maritalStatus:string;
}