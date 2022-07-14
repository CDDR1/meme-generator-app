const MemeInputs = ({ topText, bottomText, handleChange }) => {
    return (
        <div className="flex flex-col gap-2 px-4 pt-10 pb-5">
            <input type="text" onChange={(e) => handleChange(e)} value={topText} placeholder="Enter text..." className="input--top-text block p-1 w-full border-2 border-gray-500 rounded-md" />
            <input type="text" onChange={(e) => handleChange(e)} value={bottomText} placeholder="Enter text..." className="input--bottom-text block p-1 w-full border-2 border-gray-500 rounded-md" />
        </div>
    );
};

export default MemeInputs;