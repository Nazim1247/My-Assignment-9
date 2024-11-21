/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Services = ({card}) => {
    const {id,image,serviceName,category,pricing,counselor} = card;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      className="w-full h-52"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>Category: {category}</p>
    <p>Counselor: {counselor}</p>
    <p>Price: {pricing}</p>
    <div className="card-actions justify-start">
      <Link to={`/serviceDetails/${id}`} className="btn bg-green-500">Learn More</Link>
    </div>
  </div>
    </div>
    </div>
    );
};

export default Services;