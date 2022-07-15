import Header from "./components/Header";
import MemeInputs from "./components/MemeInputs";
import GenerateMeme from "./components/GenerateMeme";
import { useState, useEffect } from "react";

const App = () => {
    // State of the application
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState("https://i.imgflip.com/9ehk.jpg");
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    // Fetch API function
    const fetchAPI = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        const memesArray = data.data.memes;
        const memesWithTwoBoxes = memesArray.filter(meme => meme.box_count === 2);
        setMemes(memesWithTwoBoxes);
    };

    // Fetch memes API on page load
    useEffect(() => {
        fetchAPI();
    }, []);

    // Handle text change from the inputs
    const handleTextChange = (e) => e.target.classList.contains("input--top-text") ? setTopText(e.target.value) : setBottomText(e.target.value);

    // Get random index (between 0 and the length of the array - 1)
    const getRandomIndex = (min, max) => Math.round(Math.random() * (max - min)) + min;

    // Handle change meme template button
    const changeMemeTemplate = () => {
        let newMeme = memes[getRandomIndex(0, memes.length - 1)];
        while (newMeme.id === meme.id) {
            newMeme = memes[getRandomIndex(0, memes.length - 1)];
        }
        setMeme(newMeme.url);
    };

    return (
        <div className="App">
            <Header />
            <MemeInputs topText={topText} bottomText={bottomText} handleChange={handleTextChange} />
            <GenerateMeme memeTemplate={meme} getNewMeme={changeMemeTemplate} />
        </div>
    );
};

export default App;
