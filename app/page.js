"use client"
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";

export default function Page() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}
