import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[600px] bannerBg"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ">Welcome</h1>
          <h3 className="mb-5 text-xl font-bold">
            The leading B2B ecommerce platform for global trade
          </h3>
          <button className="btn btn-primary ">
            <Link to={"/all-products"}>Explore us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
