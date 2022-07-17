import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";


export default function Main(propss) {
  if (settings.isSplash) {
    console.log("in main.js");
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Splash
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/experience"
              exact
              element={
                <Experience
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/education"
              element={
                <Education
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/splash"
              element={
                <Splash
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/experience"
              exact
              element={
                <Experience
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/education"
              element={
                <Education
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
