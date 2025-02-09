import { ViewProvider } from "./Contexts/ViewContext";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./UI/Header";
import Home from "./UI/Home";
import { useEffect } from "react";
import { initialBlobityOptions } from "./Animate/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

function App() {
  const blobity = useBlobity(initialBlobityOptions);
  const navigate = useNavigate();

  useEffect(() => {
    // Force user to home page on refresh
    navigate("/");
  }, [navigate]);

  return (
    <div className={`max-w-[90%] xl:max-w-[1223px] w-full mx-auto`}>
      <ViewProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* Redirect any unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ViewProvider>
    </div>
  );
}

export default App;
