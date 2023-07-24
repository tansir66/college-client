import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = [
    { to: '/', label: 'Home' },
    { to: '/colleges', label: 'Colleges' },
    { to: '/admission', label: 'Admission' },
    { to: '/mycollege', label: 'My College' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <nav className="bg-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
           College Info
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colleges">Colleges</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/mycollege">My College</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

