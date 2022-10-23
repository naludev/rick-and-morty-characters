import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routesConfig";
import Component from "./Component";

export const Main = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ name, path, component }) => (
        <Route
          key={name}
          path={path}
          element={<Component component={component} />}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Main;
