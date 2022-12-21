import { FunctionalComponent } from "preact";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";

export const App: FunctionalComponent = () => (
  <div class={"min-h-screen bg-gray-300"}>
    <Hero />
    <Destinations />
  </div>
);
