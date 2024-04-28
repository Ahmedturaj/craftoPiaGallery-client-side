import { useContext, useState } from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const SignUp = () => {
    const { signUp, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            Swal.fire({
                icon: "warning",
                text: 'You have to put 6 character In Your Password',
            });
            return;
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one Uppercase character In Your Password',
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one lowercase character In Your Password',
            });
            return;
        }

        else if (!/[0-9]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one numeric character In Your Password',
            });
            return;
        }
        else if (password !== confirmPassword) {
            Swal.fire({
                icon: "warning",
                text: 'put the right password in confirm password',
            });
            return;
        }
        signUp(name, photo, email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                setUser(result.user)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have Signed up successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location?.state ? location.state : '/')

                e.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                    .split("/")[1]
                    .replace(/\)\./g, "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${errorMessage}`,
                      });
            })

    }
    return (
        <div className="w-4/6 mx-auto border mt-24 border-gray-500 rounded-2xl bg-gray-500 mb-5 shadow-gray-200 shadow-lg">
            <PageTitle title={'SignUp'}></PageTitle>
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Please SignUp</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100 ">
                    <form onSubmit={handleSignUp} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Your Photo Url" name="photo" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered w-full border-2 border-gray-500 border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password"
                                name="password"
                                className="input input-bordered border-2 border-gray-500 border-dotted" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="flex justify-end items-center relative bottom-8 mr-5 cursor-pointer  w-8 md:w-11 
                               left-24 md:left-80 lg:left-[670px] text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}</span>
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password"
                                name="confirmPassword" className="input input-bordered border-2 border-gray-500 border-dotted" required />
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="flex justify-end items-center relative bottom-8 mr-5 cursor-pointer  w-8 md:w-11 
                               left-24 md:left-80 lg:left-[670px] text-gray-500">{showConfirmPassword ? <FaEyeSlash /> : <FaEye></FaEye>}</span>
                            <label className="label mt-10">
                                <Link to={'/logIn'} className="label-text-alt link link-hover text-gray-500">Already Have an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-500 hover:border-2 hover:border-gray-500">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;