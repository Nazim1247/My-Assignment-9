import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";



const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>  
            data {data.length}
            <div className="grid md:grid-cols-3 gap-6">
            {data.map(card => <Services key={card.id} card={card}></Services>)}
            </div>
        </div>
    );
};

export default Home;