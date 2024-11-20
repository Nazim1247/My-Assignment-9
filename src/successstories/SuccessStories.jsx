import { useLoaderData } from "react-router-dom";


const SuccessStories = () => {
    const stories = useLoaderData();
    console.log(stories)
    return (
        <div className="grid grid-cols-4 gap-6 my-8">
            {
                stories.map(story => (<div key={story.id}
                className="bg-base-100 shadow-md rounded-lg p-3 space-y-2">
                    <h2 className="text-xl font-semibold">{story.name}</h2>
                    <p className="font-semibold">Achievement:</p>
                    <p>{story.achievement}</p>
                    <p className="font-semibold">Feedback:</p>
                    <p>{story.feedback}</p>
                </div>))
            }
        </div>
    );
};

export default SuccessStories;