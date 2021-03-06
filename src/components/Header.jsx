import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="flex justify-between text-white p-3 lg:px-4 bg-gradient-to-r from-gradient-left to-gradient-right">
            {/* left side */}
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-11">
                    <img src={logo} alt="Website logo" />
                </div>
                <h1 className="font-semibold text-sm tracking-wide sm:text-2xl">Meme Creator</h1>
            </div>
            {/* right side */}
            <div className="flex flex-col items-center justify-center">
                <AiFillGithub className="github-icon" />
                <a href="https://github.com/CDDR1/meme-generator-app" className="text-xs underline hover:no-underline" target="_blank">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Header;