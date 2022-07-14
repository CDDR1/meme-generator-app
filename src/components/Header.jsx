import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="flex justify-between p-3 bg-gray-300">
            {/* left side */}
            <div className="flex items-center gap-2">
                <div className="w-10">
                    <img src={logo} alt="Website logo" />
                </div>
                <h1 className="font-bold text-sm">Meme Creator</h1>
            </div>
            {/* right side */}
            <div className="flex flex-col items-center">
                <AiFillGithub className="github-icon" />
                <a href="https://github.com/CDDR1/meme-generator-app" className="text-xs underline hover:no-underline" target="_blank">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Header;