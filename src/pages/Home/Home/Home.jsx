import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}></PageTitle>
          <div className="mt-2">
            <Banner></Banner>
          </div>
        </div>
    );
};

export default Home;