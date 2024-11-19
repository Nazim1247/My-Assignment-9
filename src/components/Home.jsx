import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";



const Home = () => {
    const data = useLoaderData();
    
    return (
        <div className="mt-8">
            <Banner></Banner>  
            <h2 className="text-2xl font-bold text-center py-8">Career Counseling Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
            {data.map(card => <Services key={card.id} card={card}></Services>)}
            </div>
        </div>
    );
};

export default Home;