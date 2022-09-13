import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home/HomeComponent";
import Splash from "./pages/splash/Splash";
import Education from "./pages/education/EducationComponent";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/ContactComponent";
import Projects from "./pages/projects/Projects";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route
                path="/"
                element={
                  <Splash
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="home"
                element={
                  <Home
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="experience"
                element={
                  <Experience
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="education"
                element={
                  <Education
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="contact"
                element={
                  <Contact
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="splash"
                element={
                  <Splash
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
              <Route
                path="projects"
                element={
                  <Projects
                    theme={themes[theme]}
                    setTheme={setTheme}
                  />
                }
              />
            </Routes>
          </HashRouter>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
