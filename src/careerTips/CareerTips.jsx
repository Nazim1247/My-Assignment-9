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
        <div className="grid grid-cols-4 gap-6 my-8">
            {
                tips.map(t => <div key={t.id} 
                className="bg-base-100 shadow-md rounded-lg p-3 space-y-2 text-center">
                    <h2 className="text-xl font-semibold">{t.title}</h2>
                    <p>{t.description}</p>
                </div>)
            }
        </div>
    );
};

export default CareerTips;