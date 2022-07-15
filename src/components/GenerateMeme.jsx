const GenerateMeme = ({ memeTemplate, getNewMeme, bottomText, topText }) => {
    return (
        <div className="flex flex-col items-center gap-3 px-4 pb-4">
            {
                (bottomText.length > 0 && topText.length > 0) 
                && 
                <strong className="block font-medium">Click <a href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ" className="underline hover:no-underline">here</a> to download your meme!</strong>
            }
            <div className="relative">
                <span className="meme-text block w-full absolute text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold top-1 sm:top-3 lg:top-6 text-center">{topText}</span>
                <img src={memeTemplate} alt="Meme template" className="block w-full lg:my-4" />
                <span className="meme-text block w-full absolute text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold bottom-1 sm:bottom-3 lg:bottom-6 text-center">{bottomText}</span>
            </div>
            <button onClick={() => getNewMeme()} className="font-semibold text-white bg-gradient-to-r from-gradient-left to-gradient-right p-2 block w-full rounded-lg max-w-2xl lg:max-w-3xl hover:opacity-90">Change meme template</button>
        </div>
    );
};

export default GenerateMeme;
