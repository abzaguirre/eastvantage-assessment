import { useState } from "react";
import { useGetPersonalInformation } from "../../services/personalInformation"
import { MoreDetails, PrimaryDetails } from "./Details";

const PersonalInformation = () => {

    const { data } = useGetPersonalInformation();
    const [moreDetailsVisible, setMoreDetailsVisible] = useState(false)

    if (!data) return <div></div>

    const toggleMoreDetails = () => setMoreDetailsVisible(!moreDetailsVisible)
    const { name, email, ...tempMoreData } = data
    const { picture, ...moreData } = tempMoreData

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className="w-full p-10 flex flex-col items-start gap-y-10">
            <h1 className='text-[40px]'>Personal Information</h1>
            <div className="border rounded w-1/3 border-gray-500 p-5 ">
                <PrimaryDetails data={{ name, email }} />
                {moreDetailsVisible && <MoreDetails data={moreData} />}
                <div className="justify-end flex" onClick={toggleMoreDetails}>
                    <p className="cursor-pointer text-cyan-500">See {moreDetailsVisible ? "less." : "more."}</p>
                </div>
            </div>
            <button onClick={reloadPage} className="border rounded-lg border-gray-700 p-2 w-32 text-white bg-black">Reload</button>
        </div>
    )
}

export default PersonalInformation