/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ data, onDelete }) => {
  const { _id, title, brand, price, description, image_url } = data;
  const notify = () => toast("Data deleted  successfully!");
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this product?')) {
      // Save it!

    } else {
      // Do nothing!
      return
    }
    await fetch(`https://eshop-server-6y0a.onrender.com/shoes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
      });
    notify()
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">MRP {price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleProductCardDashboard;
