import "./App.css";
import {
  NavBar,
  Banner,
  Services,
  Mission,
  Sustainability,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <Mission></Mission>
      <Sustainability></Sustainability>
    </div>
  );
}

export default App;
