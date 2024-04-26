import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CraftItem from "./CraftItem";
import { Fade } from "react-awesome-reveal";

const CraftItems = () => {
    const [craftsItems, setCraftItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/arts')
            .then(res => res.json())
            .then(data => setCraftItems(data))
    }, [])
    return (
        <div>
            <div className=" flex gap-3 items-center border-b-2 rounded-lg border-[#f17941] w-80"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53552ff5fa1a9d22f727e2_peep-35.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-left">Craft Items  <Typewriter
                        words={['Explore', 'The', 'collections', 'of', 'craft Items']}
                        loop={0}
                    /></h2>
                </Fade>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-10/12 mx-auto my-12">
                {
                    craftsItems.slice(0, 6).map(craftsItem => <CraftItem key={craftsItem._id} craftsItem={craftsItem}></CraftItem>)
                }
            </div>
        </div>
    );
};

export default CraftItems;