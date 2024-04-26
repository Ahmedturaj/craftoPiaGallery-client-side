import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}></PageTitle>
          <div className="mt-2">
            <Banner></Banner>
          </div>
          <div className="my-14">
            <CraftItems></CraftItems>
          </div>
        </div>
    );
};

export default Home;