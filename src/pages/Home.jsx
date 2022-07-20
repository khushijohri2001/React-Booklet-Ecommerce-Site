import HomePageBody from "../components/HomePageBody";

const Home = (props) => {
  return (
    <div>
      {props.funcNav(true)}
      <HomePageBody />
    </div>
  );
};

export default Home;
