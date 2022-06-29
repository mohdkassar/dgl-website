import "./App.css";
import {
  NavBar,
  Banner,
  Services,
  Mission,
  Sustainability,
  Agreements,
  Team,
} from "./components";
import { useRef } from "react";

function App() {
  const bannerRef = useRef();
  const servicesRef = useRef();
  const missionRef = useRef();
  const sustainabilityRef = useRef();
  const agreementsRef = useRef();
  const teamRef = useRef();

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
    {
      headerTitle: "Agreements",
      headerRef: agreementsRef,
      headerID: "agreements",
    },
    {
      headerTitle: "Team",
      headerRef: teamRef,
      headerID: "team",
    },
  ];

  return (
    <div className="App">
      <NavBar navHeader={navHeader}></NavBar>
      <Banner refference={bannerRef}></Banner>
      <Services refference={servicesRef}></Services>
      <Mission refference={missionRef}></Mission>
      <Sustainability refference={sustainabilityRef}></Sustainability>
      <Agreements refference={agreementsRef}></Agreements>
      <Team refference={teamRef}></Team>
    </div>
  );
}

export default App;
