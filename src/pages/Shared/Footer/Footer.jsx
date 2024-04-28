import { useContext } from "react";
import { RiPaintFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Footer = () => {
    const { user } = useContext(AuthContext);





    const handleSubscribe = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const user = { name, email, photo };
        console.log(user);
        const dialog = document.getElementById('my_modal_1')
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {

                    Swal.fire({
                        position: "bottom-end",
                        icon: "success",
                        title: "You have subscribe successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    dialog.close();
                    e.target.reset()
                }
            })
    };

    return (
        <footer className="bg-gray-800 text-white text-center md:text-left mt-12 py-1 md:py-8">
            <div className="container mx-auto px-2 md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Link
                            to={"/"}
                            className="btn btn-ghost text-2xl gap-0 font_Jersey text-red-300 mb-4"
                        >
                            <RiPaintFill className="text-[#f17941]" />{" "}
                            <span className="text-[#f17941]">C</span>rafto
                            <span className="text-[#f17941]">p</span>ia
                            <span className="text-[#f17941] text-base md:text-2xl">G</span>aller
                            <span className="text-[#f17941]">y</span>
                        </Link>
                        <p className="text-gray-400 mb-4 md:mb-0">
                            Explore the world of art and craft with our diverse collection of
                            artistic masterpieces.
                        </p>
                        <div className="flex justify-center md:justify-start mt-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#f17941] mr-4"
                            >
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#f17941] mr-4"
                            >
                                <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f17941]">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">
                            Quick Links
                        </h3>
                        <ul className="text-gray-400">
                            <li className="hover:text-[#f17941] mb-2">
                                <a href="/">Home</a>
                            </li>
                            <li className="hover:text-[#f17941] mb-2">
                                <a href="/allArt">All Art and Craft</a>
                            </li>
                            <li className="hover:text-[#f17941] mb-2">
                                <a href="/signUp">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">
                            Services
                        </h3>
                        <ul className="text-gray-400">
                            <li className="hover:text-[#f17941] mb-2">Landscape Painting</li>
                            <li className="hover:text-[#f17941] mb-2">Watercolor Painting</li>
                            <li className="hover:text-[#f17941] mb-2">Portrait Drawing</li>
                            <li className="hover:text-[#f17941] mb-2">Oil Painting</li>
                            <li className="hover:text-[#f17941] mb-2">Charcoal Sketching</li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">
                            Contact
                        </h3>
                        <p className="text-gray-400">
                            123 Main Street
                            <br />
                            City, State 12345
                            <br />
                            Email: info@artandcraft.com
                        </p>
                        {user ? (
                            <button
                                className="btn bg-[#f17941] font_Jersey mt-4 text-white"
                                onClick={() =>
                                    document.getElementById("my_modal_1").showModal()
                                }
                            >
                                Subscribe
                            </button>
                        ) : (
                            <Link to={"/signUp"}>
                                <button className="btn bg-[#f17941] font_Jersey mt-4">
                                    SignUp
                                </button>
                            </Link>
                        )}
                        {user && (
                            <dialog id="my_modal_1" className="modal text-[#f17941]">
                                <div className="modal-box">
                                    <form onSubmit={handleSubscribe}>
                                        <label className="input input-bordered flex items-center gap-2 mb-3 border border-[#f17941]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70"
                                            >
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="photo"
                                                className="grow border-[#f17941]"
                                                defaultValue={user ? user.photoURL : "PhotoURL"}
                                            />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mb-3 border-[#f17941]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70"
                                            >
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="name"
                                                className="grow"
                                                defaultValue={user ? user.displayName : "username"}

                                            />
                                        </label>
                                        <label className="input input-bordered border-[#f17941] flex items-center gap-2 mb-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="w-4 h-4 opacity-70"
                                            >
                                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="email"
                                                className="grow"
                                                defaultValue={user ? user.email : "email"}
                                            />
                                        </label>

                                        <div className="modal-action">
                                            <input
                                                className="btn bg-[#f17941]"
                                                type="submit"
                                                value="Subscribe"
                                                method="dialog"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </dialog>
                        )}
                    </div>
                </div>
                <div className="mt-8 border-t border-[#f17941] pt-8 text-center font_Jersey text-[#f17941]">
                    <p>&copy; 2023 Art & Craft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
