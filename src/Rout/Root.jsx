import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";


const Root = () => {
    return (
      <div className="bg-white fontFamily text-black">
        <header className="border-b">
          <div className="w-[80%] mx-auto">
            <Navbar></Navbar>
          </div>
        </header>
        <main className="w-[80%] mx-auto">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default Root;