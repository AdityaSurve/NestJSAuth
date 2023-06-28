import AuthForm from "./components/AuthForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="h-screen bg-sky-100 w-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/landing" element={<div>landing</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
