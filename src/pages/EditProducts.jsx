/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditProducts = () => {

  const notify = () => toast("edited successfully!");
  const data = useLoaderData();
  const [title, setTitle] = useState(data.title);
  const [price, setPrice] = useState(data.price);
  const [brand, setBrand] = useState(data.brand);
  const [description, setDescription] = useState(data.description);
  const [image_url, setImageURL] = useState(data.image_url);


  const handleSubmit = async (e) => {
    if (confirm('Are you sure you want to edit this product?')) {
      // Save it!

    } else {
      // Do nothing!
      return
    }
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data2 = { title, brand, price, description, image_url };
    await fetch(`https://eshop-server-6y0a.onrender.com/cameras/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data2),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    notify();
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-center mt-10">Edit Product</h1>

      <div className="my-10">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-100 border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-75 border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-75 border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-75 border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-75 border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-50 bg-red-500 text-white p-4"
              type="submit"
              value="Edit product"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>

  );
};

export default EditProducts;
