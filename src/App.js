import { Routes, Route } from "react-router-dom";
import CardRating from "./components/CardRating";
import CardSuccess from "./components/CardSuccess";

function App() {
  return (
      <Routes>
        <Route index element={<CardRating />} />
        <Route path="/complete" element={<CardSuccess />} />
      </Routes>
  );
}

export default App;
