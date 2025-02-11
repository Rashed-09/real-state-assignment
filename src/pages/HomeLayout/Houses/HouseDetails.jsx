import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

const HouseDetails = () => {
    const {id} = useParams()
    
    return (
        <div>
            This is House Details
        </div>
    );
};

export default HouseDetails;
HouseDetails.propTypes = {
    id: PropTypes.number
}