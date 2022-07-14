import Header from "./components/Header";
import MemeInputs from "./components/MemeInputs";
import GenerateMeme from "./components/GenerateMeme";

const App = () => {
    return (
        <div className="App">
            <Header />
            <MemeInputs />
            <GenerateMeme />
        </div>
    );
};

export default App;
