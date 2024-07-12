import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const notify = () => toast("product added successfully!");
  const handleSubmit = async (e) => {
    if (confirm('Are you sure you want to add this product?')) {
      // Save it!

    } else {
      // Do nothing!
      return
    }
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };
    const token = localStorage.getItem('token');
    await fetch("https://eshop-server-6y0a.onrender.com/cameras", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `bearer${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        form.reset();
      });
    notify();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Add a Product</h1>

      <div className="my-10">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-700 border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-70 border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-70 border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-70 border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="bg-gray-100 p-4 w-100 border border-black rounded-lg mx-auto"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>

          <div className="mt-2 flex justify-center items-center mx-auto">
            <input
              className="btn mt-4 mx-auto btn-success w-50 bg-red-500 text-white p-4"
              type="submit"
              value="Add product"
            />
          </div>

        </form>
        <ToastContainer />
      </div>


    </div>
  );
};

export default AddProducts;
