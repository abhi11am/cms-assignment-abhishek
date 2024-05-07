import Home from "./components/Home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NewsSummary from "./components/NewsSummary";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="bg-gray-100 md:px-4 lg:px-20 xl:px-60">
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
          <Route path="/:type/:id" element={<NewsSummary />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
