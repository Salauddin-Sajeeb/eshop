import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function EditProfile() {
    const data = useLoaderData();
    const notify = () => toast("edited successfully!");
    const handleSubmit = (e) => {
        if (confirm('Are you sure you want to edit this profile?')) {
            // Save it!

        } else {
            // Do nothing!
            return
        }
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;

        const age = form.age.value;
        const mobileNumber = form.mobileNumber.value;

        const userData = {
            name,
            age,
            mobileNumber,
            //   email: data?.email,
        };

        fetch(
            `https://eshop-server-6y0a.onrender.com/user/${data?.email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
        notify();
    };
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Edit Profile </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5" >
                <div className="flex flex-col mx-auto ">
                    <label htmlFor="">User Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={data?.name}
                        className="py-2 px-1 bg-slate-50 mx-auto "
                    />
                </div>
                <div className="flex flex-col mx-auto">
                    <label htmlFor="">User email</label>
                    <input
                        type="text"
                        value={data?.email}
                        disabled
                        name="email"
                        className="py-2 px-1 bg-slate-50 rounded shadow mx-auto 	"
                    />
                </div>
                <div className="flex flex-col mx-auto">
                    <label htmlFor="">User Age</label>
                    <input type="text" name="age" className="py-2 px-1 bg-slate-50  mx-auto input input-bordered rounded shadow	" />
                </div>
                <div className="flex flex-col mx-auto">
                    <label htmlFor="">User Mobile</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        className="py-2 px-1 bg-slate-50 rounded shadow mx-auto input input-bordered rounded shadow	"
                    />
                </div>
                <div className="flex mx-auto my-4">
                    <input
                        type="submit"
                        value="Update Profile"
                        className="py-2 px-1 bg-slate-950 w-50 text-white btn btn-success "
                    />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}