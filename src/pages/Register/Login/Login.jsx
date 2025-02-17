import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../../AuthContext/AuthContext";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUsers, googleLogin, githubLogin } = useContext(ContextProvider);
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Email password based login
  const loginHandlar = e => {
    e.preventDefault()
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;

    setError('')
    loginUsers(emailValue, passwordValue)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setError(`I don't getting This account`)
      });

  }

  // Google Login
  const googleHandlar = () => {
    setError("")
    googleLogin()
    .then(() => {
      console.log("done")
    })
    .catch(() => {
      setError("Google Login Failed");
    })
  }


  // Github Login
  const githubHandlar = () => {
    setError("")
    githubLogin()
    .then(res => {
      console.log(res.user)
    })
    .catch(() => {
      setError("Github Login Failed");
    })
  }

    return (
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={loginHandlar} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-white text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-white text-black"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-lg">Login</button>
              </div>
              <p className="flex gap-3">
                Do not have an account?
                <Link
                  className="font-bold text-blue-600 underline"
                  to={"/register"}
                >
                  Register
                </Link>
              </p>
              <div
                onClick={googleHandlar}
                className="flex items-center justify-center gap-3 text-center border-2 p-1 rounded cursor-pointer"
              >
                <FaGoogle />
                <h2 className="font-bold">
                  Sign In{" "}
                  <span className="font-bold text-blue-600">Google</span>
                </h2>
              </div>
              <div
                onClick={githubHandlar}
                className="flex items-center justify-center gap-3 text-center border-2 p-1 rounded cursor-pointer"
              >
                <FaGithub />
                <h2 className="font-bold">
                  Sign In{" "}
                  <span className="font-bold text-blue-600">Github</span>
                </h2>
              </div>
              {/* error Message  */}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;