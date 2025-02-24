import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../AuthContext/AuthContext";


const Navbar = () => {
  const links = <div className="space-x-3">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/forSell"}>For Sell</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/updateprofile"}>UpDate Profile</NavLink>
  </div>

  const {logOut, user} = useContext(ContextProvider)
  const navigate = useNavigate()

  const logOutHandlar = () => {

    // Logout Promise
    logOut()
    .then(() => {
      navigate("/login")
    })
    .catch(() => {
      console.log("User is not available here")
    })
  }

    return (
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-green-400">BD Housing</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user ? (
          <div className="relative navbar-end gap-3">
            <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="image" />
            <button onClick={logOutHandlar} className="btn">
              Log Out
            </button>
            <h4 className="bottom-4/12 text-xs left-[59%] absolute opacity-0 hover:opacity-50 font-bold bg-opacity-40 text-black border-2 p-3 rounded">
             {user.displayName}
            </h4>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default Navbar;