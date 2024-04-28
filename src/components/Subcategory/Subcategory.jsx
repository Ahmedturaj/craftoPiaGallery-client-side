import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import SubcategoryCard from "./SubcategoryCard";


const Subcategory = () => {
    const loadedData = useLoaderData();
    const title = loadedData[0].subcategory_name;


    return (
        <div className="my-24 w-11/12 mx-auto">
            <PageTitle title={title}></PageTitle>
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-96 mx-auto"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-center font-bold">Subcategory name: <span className="text-[#f17941]"><Typewriter
                        words={[`${title}`]}
                        loop={0}
                    /></span></h2>
                </Fade>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    loadedData.map(data=><SubcategoryCard key={data._id} data={data}></SubcategoryCard>)
                }
            </div>
        </div>
    );
};

export default Subcategory;