const MemeInputs = ({ topText, bottomText, handleChange }) => {
    return (
        <div className="flex flex-col gap-2 px-4 pt-10 lg:pt-20 pb-5 max-w-2xl lg:max-w-3xl mx-auto">
            <input type="text" onChange={(e) => handleChange(e)} maxLength="35" value={topText} placeholder="Enter top text..." className="input--top-text block p-1 w-full border-2 border-gray-500 rounded-md" />
            <input type="text" onChange={(e) => handleChange(e)} maxLength="35" value={bottomText} placeholder="Enter bottom text..." className="input--bottom-text block p-1 w-full border-2 border-gray-500 rounded-md" />
        </div>
    );
};

export default MemeInputs;