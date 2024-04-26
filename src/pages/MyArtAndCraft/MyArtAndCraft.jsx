import { Fade } from "react-awesome-reveal";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typewriter } from "react-simple-typewriter";


const MyArtAndCraft = () => {
    return (
        <div className="my-14">
            <PageTitle title={'My Art&Craft'}></PageTitle>
            <div className="my-12">
                <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-96 mx-auto"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                    <Fade duration={3000}>
                        <h2 className="text-2xl text-center font-bold">My Art&Craft <span className="text-[#f17941]"><Typewriter
                            words={['Explore', 'your', 'Added', 'Art&Craft','Items']}
                            loop={0}
                        /></span></h2>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default MyArtAndCraft;