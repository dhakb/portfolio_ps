import Particles from "react-tsparticles";
import particlesOptions from "./configs/particles.config.json"


function App() {
    return (
        <div>



            <Particles options={particlesOptions} className="particles"/>
        </div>
    );
}

export default App;
