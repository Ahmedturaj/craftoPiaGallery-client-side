import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CraftItem from "./CraftItem";
import { Fade, Slide } from "react-awesome-reveal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CraftItems = () => {
    const [craftsItems, setCraftItems] = useState([]);
    const url = '/arts';
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => setCraftItems(data.data))
    }, [url, axiosSecure])
    return (
        <div>
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-80 md:ml-20"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53552ff5fa1a9d22f727e2_peep-35.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-center md:text-left font-bold">Craft Items  <Typewriter
                        words={['Explore', 'The', 'collections', 'of', 'craft Items']}
                        loop={0}
                    /></h2>
                </Fade>
            </div>
            <div className=" mt-5 w-10/12 mx-auto">
                <Slide duration={1000}>
                    <p>
                        Craft item collections offer a diverse range of artisanal creations, each meticulously crafted to showcase creativity, skill, and cultural heritage. From intricate paintings capturing the beauty of nature to finely detailed sketches evoking emotions, these collections celebrate the artistry and craftsmanship of talented individuals.
                    </p>
                </Slide>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:w-10/12 mx-auto my-12">
                {
                    craftsItems.slice(0, 6).map(craftsItem => <CraftItem key={craftsItem._id} craftsItem={craftsItem}></CraftItem>)
                }
            </div>
        </div>
    );
};

export default CraftItems;