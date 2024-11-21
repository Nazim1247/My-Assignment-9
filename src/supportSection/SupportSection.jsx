import { Link } from "react-router-dom";

const SupportSection = () => {
    
    return (
        <div className="text-center space-y-3 py-6 my-12 bg-blue-800 text-white">
            <h2 className="text-2xl font-bold">Our Support</h2>
            <p className="md:w-2/3 mx-auto text-gray-300 p-4">Need help or have questions? Our dedicated support team is here to assist you with all your career counseling needs.
            Whether you need advice, guidance, or have any concerns, we’re just a message away.</p>
            <Link to='/contact' 
            className="btn bg-green-500 text-white">Contact Support</Link>
        </div>
    );
};

export default SupportSection;