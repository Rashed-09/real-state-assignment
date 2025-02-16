import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Houses = ({house}) => {
    const {
      company_name,
      image,
      title,
      bedrooms,
      property_type,
      location,
      bathrooms,
      square_feet,
      id
    } = house;
    return (
      <div className="shadow-inner border m-2 rounded-none">
        <div className="card-body">
          <div className="relative">
            <img src={image} alt="picture" />
            <p className="absolute top-12 bg-green-600 text-white font-medium rounded-r-3xl pr-3 text-xs py-1">Call For Price</p>
          </div>
          <NavLink className="flex flex-col gap-3" to={`/details/:${id}`}>
            <div className="flex space-x-2 items-center">
              <h2 className="font-semibold">{title}</h2>
              <span className="bg-gray-500 px-3 py-1 rounded text-xs font-bold text-white">
                SALE
              </span>
            </div>
            <span className="bg-green-600 text-[12px] px-2 py-1 w-[23%] rounded text-white text-center">
              {property_type}
            </span>
            <div className="flex space-x-2 text-slate-600 text-sm font-semibold items-center">
              <CiLocationOn />
              <span>{location.city},</span>
              <span>{location.state}</span>
            </div>
            <div className="flex justify-around">
              <div>
                <h2 className="text-green-600 text-[0.7rem]">Bedrooms</h2>
                <h2 className="text-lg font-medium">{bedrooms}</h2>
              </div>
              <div>
                <h2 className="text-green-600 text-[0.7rem]">Bathrooms</h2>
                <h2 className="text-lg font-medium">{bathrooms}</h2>
              </div>
              <div>
                <h2 className="text-green-600 text-[0.7rem]">Size (sq.ff)</h2>
                <h2 className="text-lg font-medium">{square_feet}</h2>
              </div>
            </div>
            <div className="flex items-center space-x-6 border shadow-xl justify-center text-xs py-2">
              <img
                className="w-5 h-5 rounded-full"
                src={image}
                alt="company logo"
              />
              <div>
                <h2 className="text-green-600 font-medium">{company_name}</h2>
                <h2 className="text-[10px]">Real Estate Company</h2>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
};

export default Houses;
Houses.propTypes = {
  house: PropTypes.object
};