import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditFormProduct from "./components/EditFromProduct";
import AddReview from "./components/AddReview";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/addReview" element={<AddReview />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditFormProduct />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
