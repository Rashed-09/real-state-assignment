import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../AuthContext/AuthContext";

const Register = () => {
  const { createUsers } = useContext(ContextProvider)
  const navigate = useNavigate()


  const registerHandlar = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;

    createUsers(emailValue, passwordValue)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
    return (
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={registerHandlar} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered bg-white text-black"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
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
                <button className="btn btn-primary text-lg">Register</button>
              </div>
              <div>
                <p className="flex gap-3">
                  Do You have an account?{" "}
                  <Link
                    className="font-bold text-blue-600 underline"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;