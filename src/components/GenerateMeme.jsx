const GenerateMeme = ({ memeTemplate, getNewMeme }) => {
    return (
        <div className="flex flex-col items-center gap-3 px-4 pb-4">
            <div>
                <img src={memeTemplate} alt="Meme template" className="block w-full" />
            </div>
            <button onClick={() => getNewMeme()} className="font-semibold text-white bg-gradient-to-r from-gradient-left to-gradient-right p-2 block w-full rounded-lg">Change meme template</button>
        </div>
    );
};

export default GenerateMeme;
