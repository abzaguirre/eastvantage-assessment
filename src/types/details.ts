import { Result } from "../models/PersonalInformation";

export type TPrimaryData = Pick<Result, "name" | "email"> & {
    [key: string]: any;
}

export type TMoreData = Pick<Result, "location" | "gender" | "phone" | "cell"> & {
    [key: string]: any;
}