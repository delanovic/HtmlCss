import "./App.css";
import travel_01 from "./assets/travel-1.jpg";
import travel_02 from "./assets/travel-2.jpg";
import travel_03 from "./assets/travel-3.jpg";
import Hero from "./components/Hero"
import Slider from "./components/Slider"

import Navbar from "./components/Navbar"
const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" }

]

export default function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imgSrc={travel_01} />
      <Slider imgSrc={travel_02} title={"Be an explorer!"} subtitle={"Our platform offers a wide variety of unique travel locations"} />
      <Slider imgSrc={travel_03} title={"Be an explorer!"} subtitle={"Our platform offers a wide variety of unique travel locations"} flipped={true} />
    </div>

  );
}