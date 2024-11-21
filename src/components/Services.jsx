/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Services = ({card}) => {
    const {id,image,serviceName,category,pricing,counselor} = card;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="p-6">
    <img
      src={image}
      className="w-full h-52 rounded-xl"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p className="text-gray-400">Category: {category}</p>
    <p className="text-gray-400">Counselor: {counselor}</p>
    <p className="text-gray-400">Price: {pricing}</p>
    <div className="card-actions justify-start">
      <Link to={`/serviceDetails/${id}`} className="btn bg-green-500">Learn More</Link>
    </div>
  </div>
    </div>
    </div>
    );
};

export default Services;