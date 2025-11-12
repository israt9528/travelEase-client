import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100 text-center px-6">
      <div className="text-primary text-6xl mb-4">
        <FaCarSide className="mx-auto animate-pulse" />
      </div>

      <h1 className="text-8xl font-extrabold text-primary">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        The page you’re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors duration-300"
      >
        Back to Home
      </Link>

      <div className="absolute bottom-10 opacity-10 text-[200px] font-bold text-primary select-none pointer-events-none">
        TravelEase
      </div>
    </div>
  );
}
