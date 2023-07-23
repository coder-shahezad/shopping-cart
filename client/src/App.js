import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <Router />
      </div>
      <Footer />
    </main>
  );
};

export default App;
