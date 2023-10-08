import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Article from "./Article";
import Home from "./Home";
import Personal from "./Personal";
import Search from "./Search";

function Index() {
    return (
        <>
            <Navbar hasLogin={false} />
            {/* <Home></Home> */}
            {/* <Search></Search> */}
            {/* <Article></Article> */}
            <Personal/>
            <Footer />
        </>
    )
}

export default Index;
