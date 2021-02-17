import React, { Component } from "react";
import "./App.css";
import './bootstrap/css/bootstrap.min.css'
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './Details'
import Header from './Components/Header'
import Main from './Components/Main'
import Section from './Components/Section'
import NavBar from './Components/NavBar'
import Courses from './Components/Courses'


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Courses />

      </>

    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
