import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";


const Update = () => {
    const loadedData = useLoaderData();
    const {user}=useContext(AuthContext);
    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status} = loadedData
    const handleUpdate = e => {
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
        fetch(`http://localhost:5000/arts/${loadedData._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Great!",
                    text: "You Updated information successfully!",
                    icon: "success"
                });
                
            }
        })
    }
    return (
        <div>
            <div className="w-4/6 mx-auto border mt-14 border-[#f17941] rounded-2xl bg-gray-500 mb-5 shadow-[#f17941] shadow-lg">
                <PageTitle title={`update of ${item_name}`}></PageTitle>
                <div className=" flex gap-3 items-center  border-b-2 rounded-lg border-[#f17941] md:w-96  mb-5"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                    <Fade duration={3000}>
                        <h2 className="text-2xl text-center font-bold"><span className="text-[#f17941]"><Typewriter
                            words={['Update', 'Your', 'Information']}
                            loop={0}
                        /></span></h2>
                    </Fade>
                </div>
            
                <div className="card shrink-0 w-full p-4 bg-base-100 ">
                    <form onSubmit={handleUpdate} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL:</span>
                            </label>
                            <input type="text" defaultValue={image} name="image" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name:</span>
                            </label>
                            <input type="text" defaultValue={item_name} name="item_name" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name:</span>
                            </label>
                            <input type="text" defaultValue={subcategory_name} name="subcategory_name" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description:</span>
                            </label>
                            <textarea defaultValue={short_description} name="short_description" className="input input-bordered w-full border-2 border-[#f17941] border-dotted"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" defaultValue={price} name="price" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating:</span>
                            </label>
                            <input type="text" defaultValue={rating} name="rating" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required />
                        </div>
                        <div className="flex items-center gap-5 mb-5">
                            <span className="label-text">Customization:</span>
                            <div className="radio radio-inline">
                                <input id="yes" type="radio" name="customization" value="yes" defaultChecked={customization === "yes"} required />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div className="radio radio-inline">
                                <input id="no" type="radio" name="customization" value="no" defaultChecked={customization === "no"}  required />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                        <div className="form-control">
                            <span className="label-text">Processing Time:</span>
                            <input type="text" defaultValue={processing_time} name="processing_time" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" required />
                        </div>
                        <div className="flex items-center gap-10 mb-5">
                            <span className="label-text">Stock Status:</span>
                            <div className="radio radio-inline">
                                <input id="inStock" type="radio" name="stock_status" value="In stock" defaultChecked={stock_status === "In stock"} required />
                                <label htmlFor="inStock">InStock</label>
                            </div>
                            <div className="radio radio-inline">
                                <input id="order" type="radio" name="stock_status" value="Made to Order" defaultChecked={stock_status === "Made to Order"} required />
                                <label htmlFor="order">Order</label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email:</span>
                            </label>
                            <input type="email" defaultValue={user && user.email} name="user_email" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name:</span>
                            </label>
                            <input type="text" placeholder="User Name" defaultValue={user && user.displayName} name="user_name" className="input input-bordered w-full border-2 border-[#f17941] border-dotted" readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-gray-500 hover:border-2 hover:border-[#f17941]">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Update;