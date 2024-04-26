import { Fade } from "react-awesome-reveal";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typewriter } from "react-simple-typewriter";
import { useLoaderData } from "react-router-dom";
import ArtAndCraftTable from "./ArtAndCraftTable";


const AllArtAndCraft = () => {
    const loadedData = useLoaderData();

    return (
        <div className="my-14 w-full"> 
            <PageTitle title={'All Art&Craft'}></PageTitle>
            <div className=" flex gap-3 items-center justify-center border-b-2 rounded-lg border-[#f17941] w-96 mx-auto"> <img src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg" alt="" className="w-14" />

                <Fade duration={3000}>
                    <h2 className="text-2xl text-center font-bold">All Art&Craft <span className="text-[#f17941]"><Typewriter
                        words={['Here', 'you', 'can explore', 'all', 'craft Items']}
                        loop={0}
                    /></span></h2>
                </Fade>
            </div>

            <div className="lg:ml-36">

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>category</th>
        <th>price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
loadedData.map(artAndCraft=><ArtAndCraftTable key={artAndCraft._id} artAndCraft={artAndCraft}></ArtAndCraftTable>)
                }
      
    </tbody>
  </table>
</div>
              
            </div>
        </div>
    );
};

export default AllArtAndCraft;