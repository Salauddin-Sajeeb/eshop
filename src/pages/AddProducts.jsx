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
    await fetch("http://localhost:4000/cameras", {
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
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
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
