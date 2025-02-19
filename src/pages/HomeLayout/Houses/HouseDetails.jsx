import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types"
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HouseDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const toNumber = parseInt(id)

    const filtering = data.filter(AObject => AObject.id == toNumber);
    const oneProperty = filtering[0];
    const {
      title,
      image,
      description,
      location,
      company_name,
      price,
      property_type,
      bedrooms,
      bathrooms,
      square_feet,
      features,
      availability,
    } = oneProperty;


    return (
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="card bg-white shadow-xl lg:col-span-3">
          <h1 className="text-sm md:text-xl lg:text-3xl">
            {bedrooms} Bedrooms, {bathrooms} Bathrooms, {square_feet} sqft in{" "}
            {company_name} Company{" "}
          </h1>
          <figure>
            <img src={image} alt="image" />
          </figure>
          <div className="card-body gap-4">
            <div className="lg:flex justify-between">
              <h2 className="card-title">{title}</h2>
              {availability ? (
                <div className="badge badge-secondary text-xs lg:text-lg font-semibold">
                  Available
                </div>
              ) : (
                <div className="badge badge-secondary font-semibold text-[10px] lg:text-lg">
                  Not Available
                </div>
              )}
            </div>
            <p>{description}</p>
            <div>
              <h4 className="text-xl font-semibold text-green-500">
                Price {price}
              </h4>
              <p>{property_type} For sale</p>
            </div>
            <div className="flex items-center gap-3">
              <CiLocationOn />
              <h3>
                {location.address}, {location.state}, {location.city}
              </h3>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center text-green-500 font-semibold">
                Extra Facilities
              </div>
              <div>
                {features.map((f, i) => (
                  <p className="flex items-center gap-2" key={i}>
                    <IoIosCheckmarkCircle className="text-green-500" /> {f}
                  </p>
                ))}
              </div>
            </div>
            {/* down middle site */}
            <div className="card-actions justify-center">
              <div className="badge badge-outline text-red-500 font-bold p-4">
                Get Phone Number
              </div>
              <div className="badge badge-outline text-white bg-green-500 font-bold p-4">
                <IoCallOutline className="mr-2" /> Call Owner
              </div>
            </div>
            <nav className="my-3">
              <h6 className="text-center footer-title">Share Property</h6>
              <div className="flex justify-center gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-blue-300"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-red-600"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-blue-600"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* right site part */}
        <div className="bg-white rounded-xl">
          <div className="hero-content">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body pb-0">
                <div className="flex items-center justify-center font-bold">
                  <IoCallOutline />
                  01867103705
                </div>
                <span className="border-2 border-green-500 text-xs font-medium mb-4 text-center text-green-500">
                  Call Now
                </span>
                <h2 className="text-sm text-center font-bold text-green-500">
                  Send message to property owner
                </h2>
              </div>
              <form className=" px-10 py-3 space-y-2">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control text-black">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Please type your message"
                    className="bg-white h-24 input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-500 text-white border-none">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HouseDetails;
HouseDetails.propTypes = {
    id: PropTypes.number
}