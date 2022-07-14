import { AiFillGithub } from "react-icons/ai";

const Header = () => {
    return (
        <div>
            {/* left side */}
            <div>
                <div>
                    <img src="../assets/logo.png" alt="Website logo" />
                </div>
                <h1>Meme Creator</h1>
            </div>
            {/* right side */}
            <div>
                <AiFillGithub />
                <a href="#">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Header;