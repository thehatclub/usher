import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.tsx";
import Discover from "./pages/Discover.tsx";
import Media from "./pages/Media.tsx";
import CardBox from "./pages/CardBox.tsx";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Box bgColor={"gray.800"} bgImage={"url(/wallpaper.svg)"}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/media" element={<Media />} />
            <Route
              path="/watchlist"
              element={<CardBox page="watchlist" data="" />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </Provider>
  </StrictMode>,
);
