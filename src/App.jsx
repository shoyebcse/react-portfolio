import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Nav } from "./Nav";
import { Experience } from "./Experience";
import { Education } from "./Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <div className="left">
          <a className="nav-button" href="">
            SHOYEB ANSARI
          </a>
        </div>
        <Nav />
      </div>
      <header></header>
      <section className="center">
        <img
          className="profile-img"
          src="src\assets\Shoyeb_Photo.jpg"
          alt="Shoyeb Ansari"
        />
        <div className="sa-headline">
          <h1>Shoyeb Ansari</h1>

          <div>
            Java Fullstack developer | Java 8 | Spring boot | Angular 8 | React
            | Rest service | Javascript
          </div>
          <div>New Delhi, Delhi, India Contact info</div>
        </div>
      </section>
      <Experience />
      <Education />
    </div>
  );
}

export default App;
