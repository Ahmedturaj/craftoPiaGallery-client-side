
import { Link, NavLink } from "react-router-dom";
import { RiPaintFill } from "react-icons/ri";

import './nav.css'
const Navbar = () => {
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>Home</NavLink></li>
        <li><NavLink to={'/update'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>All Art & craft</NavLink></li>
        <li><NavLink to={'/update'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>Add Art & craft</NavLink></li>
        <li><NavLink to={'/update'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-white text-xl'}>my Art & craft</NavLink></li>
      

    </>
    return (
        <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl gap-0 font_Jersey "><RiPaintFill className="text-red-600"/>
            <span className="text-red-600">C</span>rafto<span className="text-red-600">p</span>ia<span className="text-red-600 text-2xl">G</span>aller<span className="text-red-600">y</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/logIn'}><button className="btn bg-[hsl(112,43%,55%)] text-[#f2f2f2f2]">LogIn</button></Link>
        </div>
      </nav>
    );
};

export default Navbar;