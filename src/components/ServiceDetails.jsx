import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {

    const data = useLoaderData();
    const { id, image, serviceName, category, pricing, counselor, description, duration, rating } = data;

    return (
        <div>
            <div className="card bg-base-100 w-96 md:w-1/2 mx-auto shadow-xl">
                <figure>
                    <img
                        src={image}
                        className="w-full h-52"
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description}</p>
                    <p>Category: {category}</p>
                    <p>Counselor: {counselor}</p>
                    <div className="flex items-center gap-3">
                    <span>Rating:</span>
                    <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    <p>{rating}</p>
                    </div>
                    <p>Duration: {duration}</p>
                    <p>Price: {pricing}</p>
                    <div className="card-actions justify-start">
                        <Link className="btn bg-green-500 text-white">Comment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;