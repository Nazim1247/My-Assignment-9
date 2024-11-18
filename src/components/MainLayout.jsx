import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Banner from "./Banner";
// import Services from "./Services";



const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            {/* navbar */}
            <nav className="bg-base-200">
               <Navbar></Navbar>
            </nav>
            {/* MainLayout */}
            <main className="w-11/12 mx-auto min-h-[230px]">
            
            <Outlet></Outlet>
            
            </main>
            {/* footer  */}
            <footer>
                <Footer></Footer> 
            </footer>
        </div>
    );
};

export default MainLayout;