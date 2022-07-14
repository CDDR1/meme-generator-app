import Header from "./components/Header";
import MemeInputs from "./components/MemeInputs";
import GenerateMeme from "./components/GenerateMeme";
import { useState, useEffect } from "react";

const App = () => {
    // Applications state
    const [meme, setMeme] = useState("https://i.imgflip.com/9ehk.jpg");

    // Fetch API function
    const fetchAPI = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        const memesArray = data.data.memes;
        console.log(memesArray)
    };

    // Fetch memes API on page load
    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div className="App">
            <Header />
            <MemeInputs />
            <GenerateMeme memeTemplate={meme} />
        </div>
    );
};

export default App;
