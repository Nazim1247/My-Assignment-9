import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            ServiceDetails
        </div>
    );
};

export default ServiceDetails;