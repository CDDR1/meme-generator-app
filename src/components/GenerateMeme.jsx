const GenerateMeme = () => {
    return (
        <div className="flex flex-col items-center gap-3 px-4">
            <div>
                <img src="https://via.placeholder.com/280" alt="Meme template" className="block w-full" />
            </div>
            <button className="font-semibold bg-gray-300 p-2 block w-full rounded-lg">Generate meme template</button>
        </div>
    );
};

export default GenerateMeme;
