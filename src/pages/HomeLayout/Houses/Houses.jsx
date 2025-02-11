import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";

const Houses = ({house}) => {
    const {
      company_name,
      title,
      bedrooms,
      property_type,
      location,
      bathrooms,
      square_feet,
    } = house;
    return (
      <div className="card shadow-inner border m-2 rounded-none">
        <div className="card-body">
          <img src="../../../assets/2.jpg" alt="picture" />
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
          <div className="grid grid-cols-3">
            <div>
              <h2 className="text-green-600 text-sm">Bedrooms</h2>
              <h2 className="text-xl font-medium">{bedrooms}</h2>
            </div>
            <div>
              <h2 className="text-green-600 text-sm">Bathrooms</h2>
              <h2 className="text-xl font-medium">{bathrooms}</h2>
            </div>
            <div>
              <h2 className="text-green-600 text-sm">Size (sq.ff)</h2>
              <h2 className="text-xl font-medium">{square_feet}</h2>
            </div>
          </div>
          <div className='flex items-center space-x-3 border shadow-xl justify-center text-sm py-2'>
            <img src="../../../assets/0.jpg" alt="company logo" />
            <div>
              <h2>{company_name}</h2>
              <h2>Real Estate Company</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Houses;
Houses.propTypes = {
  house: PropTypes.object
};