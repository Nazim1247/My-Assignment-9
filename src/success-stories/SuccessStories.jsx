import { Helmet } from "react-helmet-async";
import { FaUserAlt } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SuccessStories = () => {
    const stories = useLoaderData();
    return (
        <div>
            <Helmet>
            <title>Career Counseling | Success-Stories</title>
            </Helmet>
            <div className="text-center mt-12">
                <h2 className="text-2xl text-green-500 font-bold">Success Stories</h2>
                <p className="text-gray-400">Read inspiring stories of individuals who achieved their career goals with our guidance.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 my-8">
            {
                stories.map(story => (<div key={story.id}
                className="bg-base-100 shadow-md rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-4">
                    <FaUserAlt />
                    <h2 className="text-xl text-green-500 font-semibold">
                        {story.name}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                    <GrAchievement />
                    <p className="font-semibold text-yellow-500">Achievement:</p>
                    </div>
                    <p className="text-gray-400">{story.achievement}</p>
                    <div className="flex items-center gap-4">
                    <MdFeedback />
                    <p className="font-semibold text-yellow-500">Feedback:</p>
                    </div>
                    <p className="text-gray-400">{story.feedback}</p>
                </div>))
            }
        </div>
        </div>
    );
};

export default SuccessStories;