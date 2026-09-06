import { useMemo } from "react";
import Navbar from "./components/Navbar.jsx";
import ScrollSpine from "./components/ScrollSpine.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Curriculum from "./components/Curriculum.jsx";
import HowWeGotHere from "./components/HowWeGotHere.jsx";
import  WhoIsRunningIt from "./components/WhoIsRunningIt .jsx";
import Admissions from "./components/Admissions.jsx";
import Footer from "./components/Footer.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const SECTION_IDS = [
  "hero",
  "why",
  "curriculum",
  "courses",
  "exams",
  "admissions",
];

export default function App() {
  const ids = useMemo(() => SECTION_IDS, []);
  const active = useActiveSection(ids);

  const Home = () => (
    <main>
      <ScrollSpine active={active} />
      <Navbar active={active} />
      <Hero />
      <Highlights />
      <Curriculum />
      <WhoIsRunningIt></WhoIsRunningIt>
      <HowWeGotHere></HowWeGotHere>
      <Admissions />
    </main>
  );
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    
  ]);

  return (
    <div className="min-h-screen bg-paper text-ink font-body"> 
      {/* <RouterProvider router={router} /> */}
      <Home />
      <Footer />
    </div>
  );
}
