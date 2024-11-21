import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [showComment, setShowComment] = useState(false);

    const data = useLoaderData();
    const { id, image, serviceName, category, pricing, counselor, description, duration, rating } = data;

    const handleAddComment = () => {
        console.log('added')
        if (comment.trim()) {
            setComments([...comments, comment])
            setComment('')
        }
    }

    const handleToggleComment = () => {
        setShowComment(!showComment)
    }

    return (
        <div>
            <Helmet>
            <title>Career Counseling | Service-Details {`${id}`}</title>
            </Helmet>
            <div className="card bg-base-100 w-96 md:w-1/2 mx-auto shadow-xl my-8">
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
                <div>
                <h2 className="text-green-500 my-4">Give a Comment or Feedback</h2>
                <input
                    type="text"
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="btn btn-sm bg-green-500 text-white" onClick={handleAddComment}>Submit</button>
            </div>
            {comments.length > 0 && (
                <button
                    onClick={handleToggleComment}
                    className="btn my-4 bg-green-500 text-white text-base w-1/2"
                >
                    {showComment ? "Hide Comments" : "Show Comments"}
                </button>
            )}
            </div>
        </div>

            {showComment && (
                <div className="w-1/2 mx-auto mb-8">
                    <h3 className="text-lg font-medium my-4">Comments:</h3>
                    <ul className="space-y-2">
                        {comments.map((cmt, index) => (
                            <li
                                key={index}
                                className="p-3 bg-gray-100 rounded-lg border border-gray-300"
                            >
                                {cmt}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default ServiceDetails;