const Header = () => {
    render(
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
                <a href="#">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Header;