import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import Cards from "./Cards";


const CardCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div>
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-80 md:ml-20"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53552ff5fa1a9d22f727e2_peep-35.svg" alt="" className="w-14" />

                <Fade duration={2000}>
                    <h2 className="text-2xl text-center md:text-left font-bold">Art &Craft Categories :<Typewriter
                        words={['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', ' Charcoal Sketching', 'Cartoon Drawing']}
                        loop={0}
                    /></h2>
                </Fade>
            </div>
            <div className=" mt-5 w-10/12 mx-auto">
                <Slide duration={900}>
                    <p>
                        Craft Art & Craft Subcategories:

                        Landscape Painting: Capturing outdoor beauty.
                        Portrait Drawing: Depicting individuals likeness.
                        Watercolor Painting: Versatile, luminous artworks.
                        Oil Painting: Rich, textured classical medium.
                        Charcoal Sketching: Bold, dramatic drawings.
                        Cartoon Drawing: Playful, imaginative character illustrations.
                    </p>
                </Slide>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center w-11/12 mt-14 mx-auto">
                {
                    categories.splice(0, 6).map(category => <Cards key={category._id} category={category}></Cards>)
                }
            </div>
        </div>
    );
};

export default CardCategory;