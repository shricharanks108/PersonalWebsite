import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../sections/greeting/Greeting";
import Skills from "../../sections/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  console.log("in home page");
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
