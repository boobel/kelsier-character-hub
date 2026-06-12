// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CharacterSheet from "./pages/CharacterSheet/CharacterSheet";
import Spells from "./pages/Spells/Spells";
import Inventory from "./pages/Inventory/Inventory";
import Gear from "./pages/Gear/Gear";
import RpGuide from "./pages/Rpguide/RpGuide";
import Looks from "./pages/Looks/Looks";
import Features from "./pages/Features/Features";
import Infusions from "./pages/Infusions/Infusions";
import Subclass from "./pages/Subclass/Subclass";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CharacterSheet />} />
          <Route path="gear" element={<Gear />} />
          <Route path="spells" element={<Spells />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="infusions" element={<Infusions />} />
          <Route path="features" element={<Features />} />
          <Route path="rp-guide" element={<RpGuide />} />
          <Route path="subclass" element={<Subclass />} />
          <Route path="looks" element={<Looks />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
