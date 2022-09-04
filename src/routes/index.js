import { Suspense, lazy } from "react";
import {
  Navigate,
  useRoutes,
  useLocation,
} from "react-router-dom";

import LoadingScreen from "../Components/LoadingScreen";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import Skills from "../Pages/Skills";
import { PATH_PAGE } from "./paths";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={false} />}>
      <Component {...props} />
    </Suspense>
  );
};
export default function Router() {
  let element = useRoutes([
    {
      path: "skills",
      element: <MainLayout />,
      childern: [
        { element: <Home />, index: true },
        { path: "skills", element: <Skills /> },
        { path: "projects", element: <Projects /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    // {path: "*", element: <AboutMe />}
  ]);

  return element;
};

// const AboutMe = Loadable(lazy(() => import("../Pages/Home")));
// const Skills = Loadable(lazy(() => import("../Pages/Skills")));
// const Services = Loadable(lazy(() => import("../Pages/Services")));
// const Projects = Loadable(lazy(() => import("../Pages/Projects")));
// const Contact = Loadable(lazy(() => import("../Pages/Contact")));
