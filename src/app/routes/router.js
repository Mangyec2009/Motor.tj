import { lazy } from "react";

export const Home = lazy(() => import("@/pages/Home/Home.jsx"));
export const About = lazy(() => import("@/pages/About/About.jsx"));
export const Contact = lazy(() => import("@/pages/Contact/Contact.jsx"))