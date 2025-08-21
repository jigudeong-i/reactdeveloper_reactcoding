import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import DayDetail from "./pages/DayDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/day/:date" element={<DayDetail />} />
      </Routes>
    </Router>
  );
}

export default App;