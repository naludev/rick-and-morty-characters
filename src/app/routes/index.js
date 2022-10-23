import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { routes } from "./routesConfig";
import Component from "./Component";

export const App = () => (
  <HashRouter>
    <Routes>
      {routes.map(({ name, path, component }) => (
        <Route
          key={name}
          path={path}
          element={<Component component={component} />}
        />
      ))}
    </Routes>
  </HashRouter>
);

export default App;
