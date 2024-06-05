import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://eshop-server-theta.vercel.app/cameras")
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-5">Our Products</h1>
      <div className="my-16 flex flex-wrap gap-4 shadow-2xl bg-base-100">
        {products.map((data) => (
          <SingleProductCardDashboard
            key={data.id}
            data={data}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
