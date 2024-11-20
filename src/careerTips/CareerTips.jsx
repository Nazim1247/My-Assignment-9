import { useEffect, useState } from "react";


const CareerTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(()=>{
        fetch('/career-tips.json')
        .then(res => res.json())
        .then(data => setTips(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <div className="md:w-1/2 mx-auto text-center my-8">
                <h2 className="text-2xl font-bold">Empowering Your Career Journey</h2>
                <p>Discover actionable tips and strategies to enhance your professional journey. From improving your skills to expanding your network, learn how to unlock new opportunities and achieve your career aspirations.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 my-8">
            {
                tips.map(t => <div key={t.id} 
                className="bg-base-100 shadow-md rounded-lg p-3 space-y-2 text-center">
                    <h2 className="text-xl font-semibold">{t.title}</h2>
                    <p>{t.description}</p>
                </div>)
            }
        </div>
        </div>
    );
};

export default CareerTips;