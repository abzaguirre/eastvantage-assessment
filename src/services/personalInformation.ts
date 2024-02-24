import { useQuery } from "react-query"
import { http } from "./api"
import { TPersonalInformation } from "../models/PersonalInformation"


const parsePersonalInformation = (response: TPersonalInformation) => {

    return response.results?.map(({ name, gender, location, email, phone, cell, picture }) => {
        return {
            name, gender, location, email, phone, cell, picture
        }
    })[0]
}

export const getPersonalInformation = async () => {
    const response = await http.get<TPersonalInformation>('/api');
    return response.data;
};


export function useGetPersonalInformation() {
    return useQuery({
        queryKey: ['getPersonalInformation'],
        queryFn: getPersonalInformation,
        select: parsePersonalInformation
    })
}