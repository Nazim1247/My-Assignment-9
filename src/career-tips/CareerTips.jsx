import { useLoaderData } from "react-router-dom";


const CareerTips = () => {
    const career = useLoaderData();
    return (
        <div>
            <div className="text-center my-12 space-y-3">
                <h2 className="text-2xl text-green-500">Essential Career Tips for Success</h2>
                <p className="text-gray-400 md:w-2/3 mx-auto p-4">Unlock your full potential with these expert career tips. Whether you're just starting out or looking to take your career to the next level, these actionable tips will help you build the skills, mindset, and strategies needed to succeed in your professional journey. From networking to personal growth, discover valuable advice that will guide you every step of the way.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 my-12">
            {
                career.map(card => (<div key={card.id}
                className="text-center p-4 space-y-2 rounded-md shadow-md bg-green-50">
                    <h2 className="text-xl text-green-500 font-semibold">{card.title}</h2>
                    <p className="text-gray-500">{card.description}</p>
                </div>))
            }
        </div>
        </div>
    );
};

export default CareerTips;