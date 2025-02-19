
const Footer = () => {
    return (
      <footer className="py-20 w-[80%] mx-auto">
        <div className="footer grid md:grid-cols-4 space-x-10 ">
          <nav>
            <h6 className="footer-title text-green-700">ABOUT BDHOUSING</h6>
            <p>
              bdHousing has been the dominant frontier of online real estate
              marketplace for the last 17 years. Being the largest real estate
              portal in Bangladesh, bdHousing occupies a common platform for
              property owners, whether individual or company, to promote their
              properties for sell, rent, & property seekers, who are looking for
              property for sale in Bangladesh, to find their dream homes..
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-green-700">ABOUT BDHOUSING</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Sitemap</a>
          </nav>
          <nav>
            <h6 className="footer-title text-green-700">QUICK LINKS</h6>
            <a className="link link-hover">Add your property</a>
            <a className="link link-hover">Post your requirement</a>
            <a className="link link-hover">Advertise with us</a>
            <a className="link link-hover">Search Properties</a>
            <a className="link link-hover">Featured Properties</a>
            <a className="link link-hover">Recent Properties</a>
            <a className="link link-hover">Premium Developers</a>
          </nav>
          <nav>
            <h6 className="footer-title text-green-700">CUSTOMAR SERVICE</h6>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Email Us</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
        </div>
      </footer>
    );
};

export default Footer;