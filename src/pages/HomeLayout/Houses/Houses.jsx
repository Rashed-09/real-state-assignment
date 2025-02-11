import { Link } from 'react-router-dom';

const Houses = ({house}) => {
    const { title, company_name, price, image, id } = house;
    return (
      <div className="card shadow-lg m-2 rounded-none">
        <div className="card-body">
          <img src={image} alt="picture" />
          <h2>{title}</h2>
          <h2>{company_name}</h2>
          <h2>{price}</h2>
          <button className="btn btn-success">
            <Link to={`/details/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    );
};

export default Houses;