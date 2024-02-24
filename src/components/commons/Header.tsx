import EastvantageLogo from "../../assets/icons/eastvantage-logo.png"

const Header = () => {

    return (
        <div className="w-screen h-20 bg-sky-400 p-2">
            <img src={EastvantageLogo} alt="" className="h-full" />
        </div>
    )
}

export default Header