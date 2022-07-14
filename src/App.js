import "./App.css";
import {
  NavBar,
  Banner,
  Services,
  Sustainability,
  Agreements,
  Team,
  Contact,
} from "./components";
import { useRef } from "react";

function App() {
  const bannerRef = useRef();
  const servicesRef = useRef();
  const agreementsRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  const navHeader = [
    {
      headerTitle: "Home",
      headerRef: bannerRef,
      headerID: "home",
    },
    {
      headerTitle: "About",
      headerRef: servicesRef,
      headerID: "services",
    },
    {
      headerTitle: "Services",
      headerRef: agreementsRef,
      headerID: "agreements",
    },
    {
      headerTitle: "Our Team",
      headerRef: teamRef,
      headerID: "team",
    },
    {
      headerTitle: "Contact Us",
      headerRef: contactRef,
      headerID: "contact",
    },
  ];

  return (
    <div className="App">
      <NavBar navHeader={navHeader}></NavBar>
      <Banner refference={bannerRef}></Banner>
      <Services refference={servicesRef}></Services>
      <Sustainability></Sustainability>
      <Agreements refference={agreementsRef}></Agreements>
      <Team refference={teamRef}></Team>
      <Contact refference={contactRef}></Contact>
    </div>
  );
}

export default App;
