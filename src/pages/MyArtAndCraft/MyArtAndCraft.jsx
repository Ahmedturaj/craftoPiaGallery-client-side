import { Fade } from "react-awesome-reveal";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typewriter } from "react-simple-typewriter";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import MyCard from "./MyCard";


const MyArtAndCraft = () => {
    const [artAndCrafts, setArtAndCrafts] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then(res => res.json())
            .then(data => setArtAndCrafts(data))
    }, [user])
    // const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, user_email, user_name } = artAndCraft
    return (
        <div className="my-14">
            <PageTitle title={'My Art&Craft'}></PageTitle>
            <div className="my-12">
                <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-96 mx-auto"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                    <Fade duration={3000}>
                        <h2 className="text-2xl text-center font-bold">My Art&Craft <span className="text-[#f17941]"><Typewriter
                            words={['Explore', 'your', 'Added', 'Art&Craft', 'Items']}
                            loop={0}
                        /></span></h2>
                    </Fade>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
               {
                artAndCrafts.map(artAndCraft=><MyCard key={artAndCraft._id} artAndCraft={artAndCraft}></MyCard>)
               } 
               
            </div>
        </div>
    );
};

export default MyArtAndCraft;