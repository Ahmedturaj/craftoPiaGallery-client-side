import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle/PageTitle";


const AddArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        if (isNaN(processing_time)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Enter a Number in Processing Time",
            });
            return;
        }
        if (isNaN(price)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Enter a Number in price",
            });
            return;
        }
        if (isNaN(rating)) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Enter a Number in rating",
            });
            return;
        }

        const formData = {
            image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, user_email, user_name
        };

        console.log(formData);
        fetch('http://localhost:5000/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Great!",
                        text: "You added information successfully!",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    };

    return (
        <div className="w-4/6 mx-auto border mt-14 border-gray-500 rounded-2xl bg-gray-500 mb-5 shadow-gray-200 shadow-lg">
            <PageTitle title={'Add Art&Craft'}></PageTitle>
            <h1 className="text-left ml-2 text-3xl font-bold py-2">Add Art & Craft Item</h1>
            <div className="card shrink-0 w-full p-4 bg-base-100 ">
                <form onSubmit={handleSubmit} className="card-body w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL:</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name:</span>
                        </label>
                        <input type="text" placeholder="Item Name" name="item_name" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name:</span>
                        </label>
                        <input type="text" placeholder="Subcategory Name" name="subcategory_name" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description:</span>
                        </label>
                        <textarea placeholder="Short Description" name="short_description" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating:</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                        <span className="label-text">Customization:</span>
                        <div className="radio radio-inline">
                            <input id="yes" type="radio" name="customization" value="yes" required />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="radio radio-inline">
                            <input id="no" type="radio" name="customization" value="no" required />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <span className="label-text">Processing Time:</span>
                        <input type="text" placeholder="Processing Time" name="processing_time" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                    </div>
                    <div className="flex items-center gap-10 mb-5">
                        <span className="label-text">Stock Status:</span>
                        <div className="radio radio-inline">
                            <input id="inStock" type="radio" name="stock_status" value="In stock" required />
                            <label htmlFor="inStock">InStock</label>
                        </div>
                        <div className="radio radio-inline">
                            <input id="order" type="radio" name="stock_status" value="Made to Order" required />
                            <label htmlFor="order">Order</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email:</span>
                        </label>
                        <input type="email" defaultValue={user && user.email} name="user_email" className="input input-bordered w-full border-2 border-gray-500 border-dotted" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name:</span>
                        </label>
                        <input type="text" placeholder="User Name" defaultValue={user && user.displayName} name="user_name" className="input input-bordered w-full border-2 border-gray-500 border-dotted" readOnly />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-gray-500 hover:border-2 hover:border-gray-500">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtAndCraft;
