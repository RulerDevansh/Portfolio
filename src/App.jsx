import { useState, useEffect } from "react";
import { Nav, Hero, About, TechBalls, Project, Contact, Stars } from "./components";
import { github, linkedln } from "./assets";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => window.innerWidth < 768;

    if (checkScreenWidth()) {
      const interval = setInterval(() => {
        window.location.reload();
      }, 120000); // 120000ms = 2 minutes

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div>
      {/* <h1 className="">Devansh Srivastava</h1> */}
      <Nav />
      <Hero />
      <About />
      <TechBalls />
      <Project />

      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>

      <footer>
        <div className="flex justify-evenly items-center h-8 sm:h-16 text-slate-400">
          <p>&copy; {year} Devansh Srivastava</p>
          <div className="flex gap-4">
            <span>Social</span>
            <img
              onClick={() => window.open("https://github.com/RulerDevansh", "_blank")}
              className="h-auto w-6 cursor-pointer"
              src={github}
              alt="github"
            />
            <img
              onClick={() => window.open("https://www.linkedin.com/in/devansh-srivastava-387574297/", "_blank")}
              className="h-auto w-6 cursor-pointer"
              src={linkedln}
              alt="linkedln"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
