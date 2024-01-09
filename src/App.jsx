import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Bromag from "./router/Bromag";

const App = () => {
  return (
    <Fragment>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/*' element={<Bromag/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
