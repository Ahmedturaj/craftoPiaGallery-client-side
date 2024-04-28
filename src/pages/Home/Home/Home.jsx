import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import CardCategory from "../CardCategory/CardCategory";
import Counter from "../Counter/Counter";
import CraftItems from "../CraftItems/CraftItems";
import Subscribers from "../Subscribers/Subscribers";

const Home = () => {
  return (
    <div>
      <PageTitle title={'Home'}></PageTitle>
      <div className=" md:mt-2 relative  md:-top-[88px]">
        <Banner></Banner>
      </div>
      <div className="my-14">
        <CraftItems></CraftItems>
      </div>
      <div className="my-14">
        <Counter></Counter>
      </div>
      <div className="mb-4">
        <CardCategory></CardCategory>
      </div>
      <div className="my-10">
        <Subscribers></Subscribers>
      </div>
    </div>
  );
};

export default Home;