import { Link,useParams } from "react-router";
import { useLoaderData } from "react-router";

 const Git = () => {

    const {id} = useParams();
    const data = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <img
            src={`${data.avatar_url}`}
            alt="GitHub Avatar"
            className="w-20 h-20 rounded-full border"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
            {`${data.name}`}
            </h2>
            <p className="text-gray-500">@githubuser</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-gray-600 text-sm">
          This is a short bio section. You can display GitHub user bio here.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 text-center">
          <div>
            <p className="text-lg font-bold text-gray-800">{`${data.public_repos}`}</p>
            <p className="text-sm text-gray-500">Repos </p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">{`${data.followers}`}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">{`${data.following}`}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            onClick={()=> window.open(data.html_url)}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
          
            View GitHub Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default Git;
