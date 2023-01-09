
import './App.scss';
import Home from "./components/Home/Home"
import School from "./components/School/School"
import About from "./components/About/About"
import Follow from "./components/Follow/Follow"
import Sing from "./components/Sing/Sing-in"


function App() {
  return (
    <div className="App">
      <Sing/>
      <Follow/>
      <About/>
      <Home/>
      <School/>

    </div>
  );
}

export default App;
