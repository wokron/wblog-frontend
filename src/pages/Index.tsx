import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Article from "./Article";
import Home from "./Home";
import Personal from "./Personal";
import Search from "./Search";
import NotFound from "./NotFound";

function Index() {
    return (
        <>
            <Navbar hasLogin={true} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/personal/:id/*" element={<Personal />} />
                <Route path="*" element={<NotFound isSmall={false} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Index;
