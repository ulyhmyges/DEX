import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/home');
    };

    return (
        <div className="Home">
            <div className="container mt-5">
                <h1 className="mb-4">Hello, a little DEX under construction!</h1>
                {!user.username ? (
                    <div>
                        <Link to="/login" className="btn btn-primary m-2">Login</Link>
                        <Link to="/signup" className="btn btn-secondary m-2">Sign Up</Link>
                    </div>
                ) : (
                    <button onClick={handleLogout} className="btn btn-danger m-2">Logout</button>
                )}
            </div>
        </div>
    );
};

export default Home;






// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="container mt-5">
//         <h1 className="mb-4">Hello, a little DEX under construction!</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
