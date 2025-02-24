import { useLoaderData } from "react-router-dom";
import ForSellDetails from "./ForSellDetails";

const ForSell = () => {
    const datas = useLoaderData()
    




    return (
      <div>
        {
            datas.map((data, id) => <ForSellDetails key={id} data={data}></ForSellDetails>)
        }
      </div>
    );
};

export default ForSell;