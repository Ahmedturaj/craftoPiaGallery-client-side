import { FcGoogle } from "react-icons/fc";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { TfiGithub } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Login = () => {
    const handleLogIn=(e)=>{
        e.preventDefault()
    }
    const handleGoogle=e=>{
        e.preventDefault()
    }
    const handleGitHub=e=>{
        e.preventDefault()
    }

    return (
        <div className="w-4/6 mx-auto border mt-14 border-gray-500 rounded-2xl bg-gray-500 mb-5 shadow-green-200 shadow-lg">
        <PageTitle title={'SingIn'}></PageTitle>
        <div className="w-full">
            <h1 className="text-center text-3xl font-bold py-2">Please SignIn</h1>
            <div className="card shrink-0 w-full p-4 bg-base-100 ">
                <form onSubmit={handleLogIn} className="card-body w-full">
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
                        <input type="password" placeholder="password" name="password" className="input input-bordered border-2 border-gray-500 border-dotted" required />
                        <label className="label mt-10">
                            <Link to={'/SignUp'} className="label-text-alt link link-hover text-gray-500">Have no account ? Create Account please</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6 gap-5">
                        <button className="btn bg-gray-500 hover:border-2 hover:border-gray-500 ">SignIn</button>
                        <button onClick={handleGoogle} className="btn bg-gray-500 text-3xl hover:border-2 hover:border-gray-500"><FcGoogle></FcGoogle></button>
                        <button onClick={handleGitHub} className="btn bg-gray-500 text-3xl hover:border-2 hover:border-gray-500"><TfiGithub></TfiGithub></button>
                    </div>
                </form>
            </div>
        </div>
       
    </div>
    );
};

export default Login;