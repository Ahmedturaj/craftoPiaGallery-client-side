import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import CardCategory from "../CardCategory/CardCategory";
import CraftItems from "../CraftItems/CraftItems";

const Home = () => {
  return (
    <div>
      <PageTitle title={'Home'}></PageTitle>
      <div className="mt-2 relative  md:-top-20">
        <Banner></Banner>
      </div>
      <div className="my-14">
        <CraftItems></CraftItems>
      </div>
      <div className="">
        <CardCategory></CardCategory>
      </div>
    </div>
  );
};

export default Home;