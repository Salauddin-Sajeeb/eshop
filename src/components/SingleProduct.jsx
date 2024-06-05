import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ data }) => {
  const { _id, title, brand, price, description, image_url } = data;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions ">
          <p className="btn btn-primary text-start">
            <Link to={`/products/${_id}`}>See details</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
