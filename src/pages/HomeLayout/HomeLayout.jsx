import { useLoaderData } from "react-router-dom";
import Houses from "./Houses/Houses";

const HomeLayout = () => {
    const houses = useLoaderData()
    return (
      <div>
        <header>
          <div>This is for image slider</div>
          <div className="text-center space-y-5 my-7">
            <h2 className="text-xl font-bold text-green-400">
              The Largest Real State Marketing Portal In Bangladesh
            </h2>
            <p>
              Searching for the perfect place to live on? Well, look no further,
              as bdHousing is here with everything you have been looking for
              with the largest real estate marketing portal in Bangladesh.
              Whether your concern is an apartment for sale in Bangladesh or
              property for sale in Bangladesh, we have the most desired solution
              for you. With over 1.5 lac+ listings, 2 lacs+ users, 150
              developers over 4 thousand+ new Projects, our web portal guarantee
              that everything you wish for the perfect living is just a few
              clicks away!
            </p>
            {/* adverticement section */}
            <div className="w-[80%] mx-auto py-6 text-white text-2xl font-bold bg-slate-700 lg:flex lg:justify-between px-3 text-start space-y-3">
              <div className="flex flex-col items-start">
                <h2>Halal Investment</h2>
                <h2>Halal Income</h2>
              </div>
              <div>Most Trusted Website is This</div>
              <div className="flex flex-col items-start">
                <h2>BHAIYA Hotels | 01867103705</h2>
                <address>BagherPara Jessore</address>
              </div>
            </div>
          </div>
        </header>
        <main className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* left site aside */}
          <aside className="md:col-span-2 lg:col-span-3">
            <div>
              <h2 className="text-center font-bold mt-3">
                FEATURED PROPERTIES
              </h2>
            </div>
            <div className="grid lg:grid-cols-3">
              {houses.map((h, i) => (
                <Houses key={i} house={h}></Houses>
              ))}
            </div>
          </aside>
          {/* Right site aside */}
          <aside className="">
            <h2 className="text-center font-bold mt-3">SUGGESTED FEATURED</h2>
            <div>
              {houses.map((s, i) => (
                <Houses key={i} house={s}></Houses>
              ))}
            </div>
          </aside>
        </main>
        <footer>Footer</footer>
      </div>
    );
};

export default HomeLayout;