import profile from './assets/profile.png';
import { useState } from 'react';
function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-900">
      <div className="bg-cyan-950 p-6 rounded-2xl max-w-sm w-full text-center">

        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-cyan-700 hover:border-cyan-500 transition-colors duration-300"
        />

        <h1 className="text-2xl font-bold text-cyan-100 mb-1">Ghulam Akbar</h1>
        <h2 className="text-cyan-300 mb-4">Full Stack Developer (MERN)</h2>

        <p className="text-cyan-500 italic mb-6 px-4">
          "Passionate about building scalable web applications and exploring new technologies."
        </p>

        <button onClick={handleFollowClick}  className="cursor-pointer bg-cyan-700 hover:bg-cyan-800 text-white px-5 py-2 rounded-full font-medium transition duration-300">
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default App;
