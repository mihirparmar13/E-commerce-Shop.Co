
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">

                <h1 className="text-7xl font-extrabold text-red-500">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-4 leading-relaxed">
                    The page you are looking for doesn't exist
                    or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
                >
                    Go to Home
                </Link>

            </div>

        </div>
    );
};

export default NotFound;