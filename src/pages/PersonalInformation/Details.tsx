import { Location, Name } from "../../models/PersonalInformation"
import { TMoreData, TPrimaryData } from "../../types/details";
import { capitalizeFirstLetter } from "../../utils/capitalize";



export const RenderAddress = ({ location }: { location: Location }) => {
    return (
        <p>{location.street.number} {location.street.name} {location.city} {location.state} {location.country}</p>
    )
}

export const RenderName = ({ name }: { name: Name }) => {
    return (
        <p>{name.title}. {name.first} {name.last}</p>
    )
}

export const RenderData = ({ data }: { data: TPrimaryData | TMoreData }) => {
    const details = Object.keys(data)
    return (
        <div className="flex flex-col">
            {
                details.map(item => {
                    return (
                        <div key={item} className="flex w-full items-start">
                            <p className="w-1/4 flex justify-start">{capitalizeFirstLetter(item)}:</p>
                            <p className="text-left w-3/4 ">{item === "location" ? <RenderAddress location={data.location} /> :
                                item === "name" ? <RenderName name={data.name} /> : capitalizeFirstLetter(data[item])}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const PrimaryDetails = ({ data }: { data: TPrimaryData }) => {
    return <RenderData data={data} />
}

export const MoreDetails = ({ data }: { data: TMoreData }) => {
    return <RenderData data={data} />
}