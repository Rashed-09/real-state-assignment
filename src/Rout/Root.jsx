import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
      <div className="bg-white fontFamily text-black">
        <header className="border-b">
          <div className="w-[90%] mx-auto">
            <Navbar></Navbar>
          </div>
        </header>
        <main className="w-[90%] mx-auto">
          <Outlet></Outlet>
        </main>
        <footer className="bg-gray-400">
          <Footer></Footer>

          <div className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                BD Housing Industries Ltd
              </p>
            </aside>
          </div>
        </footer>
      </div>
    );
};

export default Root;