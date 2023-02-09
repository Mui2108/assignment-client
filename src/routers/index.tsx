import Accident from "../pages/accidents";
import Main from "../pages/home-page";

export const routers = [
  {
    path: "/",
    name: "Home Page",
    component: <Main />,
  },
  {
    path: "/accident",
    name: "Accident",
    component: <Accident />,
  },
];
