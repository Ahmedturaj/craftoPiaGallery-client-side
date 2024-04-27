import { RiPaintFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center md:text-justify mt-12 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Link to={'/'} className="btn relative -left-7 md:left-7 btn-ghost text-xs md:text-2xl gap-0 font_Jersey text-red-300 mb-4"><RiPaintFill className="text-[#f17941]" />
                            <span className="text-[#f17941]">C</span>rafto<span className="text-[#f17941]">p</span>ia<span className="text-[#f17941] text-base md:text-2xl">G</span>aller<span className="text-[#f17941]">y</span></Link>
                        <p className="text-gray-400">
                            Explore the world of art and craft with our diverse collection of
                            artistic masterpieces.
                        </p>
                        <div className="flex mt-4">
                            <a href="#" className="text-gray-400 hover:text-[#f17941] mr-4">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f17941] mr-4">
                                <i className="fab fa-github fa-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f17941]">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li className="hover:text-[#f17941]">
                                <a href="/">Home</a>
                            </li>
                            <li className="hover:text-[#f17941]">
                                <a href="/allArt">All Art and Craft</a>
                            </li>
                            <li className="hover:text-[#f17941]">
                                <a href="/signUp">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">Services</h3>
                        <ul className="text-gray-400">
                            <li className="hover:text-[#f17941]">Landscape Painting</li>
                            <li className="hover:text-[#f17941]">Watercolor Painting</li>
                            <li className="hover:text-[#f17941]">Portrait Drawing</li>
                            <li className="hover:text-[#f17941]">Oil Painting</li>
                            <li className="hover:text-[#f17941]">Charcoal Sketching</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 font_Jersey text-[#f17941]">Contact</h3>
                        <p className="text-gray-400">
                            123 Main Street
                            <br />
                            City, State 12345
                            <br />
                            Email: info@artandcraft.com
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-[#f17941] pt-8 text-center  font_Jersey text-[#f17941]">
                    <p>&copy; 2023 Art & Craft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;