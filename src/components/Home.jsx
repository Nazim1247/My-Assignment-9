import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import { Helmet } from "react-helmet-async";
import SupportSection from "../supportSection/SupportSection";



const Home = () => {
    const data = useLoaderData();
    return (
        <div className="mt-8">
            <Helmet>
                <title>Career Counseling | Home</title>
            </Helmet>
            <Banner></Banner>  
            <h2 className="text-2xl font-bold text-center py-8 text-green-500">Career Counseling Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
            {data.map(card => <Services key={card.id} card={card}></Services>)}
            </div>

            <Outlet></Outlet>
            <SupportSection></SupportSection>
        </div>
    );
};

export default Home;