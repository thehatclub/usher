import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.tsx";
import Discover from "./pages/Discover.tsx";
import Login from "./pages/Login.tsx";
import Media from "./pages/Media.tsx";
import Profile from "./pages/Profile.tsx";
import Revision from "./pages/Revision.tsx";
import Watchlist from "./pages/Watchlist.tsx";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Flex
        bgColor={"gray.800"}
        h={"100vh"}
        w={"100%"}
        flexDirection={"column"}
      >
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/login" element={<Login />} />
            <Route path="/media" element={<Media />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Flex>
    </Provider>
  </StrictMode>,
);