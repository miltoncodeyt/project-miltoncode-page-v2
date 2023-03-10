import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Annotations from "./pages/Annotations";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/annotations" component={Annotations} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={AboutUs} />
          <Route
            component={() => (
              <div className="l-container mx-auto px-4">
                <h1 className="text-2xl text-red-400">Error 404</h1>
                <span className="font-bold">Page no found</span>
              </div>
            )}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
