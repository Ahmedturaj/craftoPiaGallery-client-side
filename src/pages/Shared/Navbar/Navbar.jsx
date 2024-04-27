
import { Link, NavLink } from "react-router-dom";
import { RiPaintFill } from "react-icons/ri";
import './nav.css'
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isChecked, setIsChecked] = useState(theme === "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const handleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    setIsChecked(e.target.checked);
  }
  const navLink = <>
    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#FFBE98]  border border-[#f17941] font-bold  p-2 rounded-md text-xl' : 'text-[#f17941] text-xl'}>Home</NavLink></li>
    <li><NavLink to={'/allArt'} className={({ isActive }) => isActive ? 'text-[#FFBE98]  border border-[#f17941] font-bold  p-2 rounded-md text-xl' : 'text-[#f17941] text-xl'}>All Art & craft</NavLink></li>
    {loading ? <span className="loading loading-dots loading-md"></span> : user && <li><NavLink to={'/addArt'} className={({ isActive }) => isActive ? 'text-[#FFBE98] border border-[#f17941] font-bold  p-2 rounded-md text-xl' : 'text-[#f17941] text-xl'}>Add Art & craft</NavLink></li>}
    {loading ? <span className="loading loading-dots loading-md"></span> : user && <li><NavLink to={'/myArt'} className={({ isActive }) => isActive ? 'text-[#FFBE98]   border border-[#f17941] font-bold  p-2 rounded-md text-xl' : 'text-[#f17941] text-xl'}>my Art & craft</NavLink></li>}


  </>
  return (
    <nav className="navbar bg-base-content bg-opacity-5 absolute z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="btn relative -left-7 md:left-7 btn-ghost text-xs md:text-2xl gap-0 font_Jersey text-red-300 "><RiPaintFill className="text-[#f17941]" />
          <span className="text-[#f17941]">C</span>rafto<span className="text-[#f17941]">p</span>ia<span className="text-[#f17941] text-base md:text-2xl">G</span>aller<span className="text-[#f17941]">y</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center mr-2">
          <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" checked={isChecked}/>
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        {loading ? <progress className="progress w-40 md:w-56 bg-[#f17941]"></progress> : <div className="flex items-center">
          {
            user &&
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
              <div className="w-10 rounded-full">
                <img alt={`picture of ${user.displayName}`} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Y36ZBDD/blank-avatar-photo-place-holder-600nw-1095249842.jpg'} title={user.displayName} />
              </div>
            </div>
          }
          {
            user ? <>
              <button onClick={logOut} className="btn text-[#f2f2f2f2] text-base md:text-xl bg-[#f17941] hover:bg-[#f17941]">LogOut</button>
            </> :
              <Link to={'/logIn'}>  <button className="btn text-[#f2f2f2f2] text-base md:text-xl bg-[#f17941] hover:bg-[#f17941]">Login</button></Link>
          }
        </div>}
      </div>
    </nav>
  );
};

export default Navbar;