import { useContext } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";

const UpdateProfile = () => {
    const { user, profileUpdate } = useContext(ContextProvider);
    const updateHandlar = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const url = e.target.url.value;
        console.log(name, url)

        if(user) {
            profileUpdate(name, url)
        }
    }
    return (
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={updateHandlar} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full Name"
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
                  name="url"
                  placeholder="ImageBB Direct Links"
                  className="input input-bordered bg-white text-black"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-lg">Update and Reload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;