import { Fade } from "react-awesome-reveal";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typewriter } from "react-simple-typewriter";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import MyCard from "./MyCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyArtAndCraft = () => {
    const [artAndCrafts, setArtAndCrafts] = useState([]);
    const [customizations, setCustomizations] = useState("");
    const { user } = useContext(AuthContext);
    const url = `/myArt/${user?.email}`;
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setArtAndCrafts(res.data)
            })
    }, [url, axiosSecure])
    const handleCustomizationChange = (event) => {
        setCustomizations(event.target.value);
    };
    const filteredItems = customizations
        ? artAndCrafts.filter((item) => item.customization === customizations)
        : artAndCrafts;
    return (
        <div className="my-24">
            <PageTitle title={'My Art&Craft'}></PageTitle>
            <div className="my-12">
                <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] md:w-96 w-full mx-auto"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                    <Fade duration={3000}>
                        <h2 className="text-2xl text-center font-bold">My Art&Craft <span className="text-[#f17941]"><Typewriter
                            words={['Explore', 'your', 'Added', 'Art&Craft', 'Items']}
                            loop={0}
                        /></span></h2>
                    </Fade>
                </div>
                <div className="flex justify-center">
                    <div className=" my-5">
                        <select
                            value={customizations}
                            onChange={handleCustomizationChange}
                            className="border border-[#f17941] rounded-md px-2 py-1"
                        >
                            <option value="">All Customizations</option>
                            {Array.from(new Set(artAndCrafts.map((item) => item.customization))).map(
                                (customization) => (
                                    <option key={customization} value={customization}>
                                        {customization}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
                {
                    filteredItems && filteredItems.map(artAndCraft => (<MyCard key={artAndCraft._id} artAndCraft={artAndCraft} artAndCrafts={artAndCrafts} setArtAndCrafts={setArtAndCrafts}></MyCard>))
                }

            </div>
        </div>
    );
};

export default MyArtAndCraft;