import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="my-5  ">
      <h1 className="text-5xl text-center font-bold mt-5 ">{title}</h1>

      <img className="h-[600px] w-50 h-40 mx-auto" src={image_url} alt="product image" />

      <div className="items-center"> <h3 className="text-2xl font-semibold  text-center">{price} $$</h3>
        <h3 className="text-xl font-semibold text-center">{brand}</h3>
        <p className="text-lg font-light text-center py-3">{description}</p></div>
    </div>
  );
};

export default ProductDetails;
