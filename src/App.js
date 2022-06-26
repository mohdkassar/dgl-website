import "./App.css";
import {
  NavBar,
  Banner,
  Services,
  Mission,
  Sustainability,
} from "./components";
import { useRef } from "react";

function App() {
  const bannerRef = useRef();
  const servicesRef = useRef();
  const missionRef = useRef();
  const sustainabilityRef = useRef();

  const navHeader = [
    {
      headerTitle: "Home",
      headerRef: bannerRef,
      headerID: "home",
    },
    {
      headerTitle: "Services",
      headerRef: servicesRef,
      headerID: "services",
    },
    {
      headerTitle: "Mission",
      headerRef: missionRef,
      headerID: "mission",
    },
    {
      headerTitle: "Sustainability",
      headerRef: sustainabilityRef,
      headerID: "sustainability",
    },
  ];

  return (
    <div className="App">
      <NavBar navHeader={navHeader}></NavBar>
      <Banner refference={bannerRef}></Banner>
      <Services refference={servicesRef}></Services>
      <Mission refference={missionRef}></Mission>
      <Sustainability refference={sustainabilityRef}></Sustainability>
    </div>
  );
}

export default App;
