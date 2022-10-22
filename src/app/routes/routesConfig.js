import Home from "../../pages/Home";
import Details from "../../pages/Details";
import { ROUTES } from "./paths";

export const routes = [
  {
    path: ROUTES.HOME,
    name: "home",
    component: Home,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: ROUTES.DETAIL(':id'),
    name: "detail",
    component: Details
  }
];