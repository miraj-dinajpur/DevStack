import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto  bg-white-200 h-auto md:h-80 flex flex-col md:flex-row justify-between items-center p-4 mt-20">
      <div className="flex flex-col text-center md:text-start items-center md:items-start">
        <h2>
          <span className="text-4xl md:text-6xl font-bold ">Build Your Ideal</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold bg-linear-to-r from-orange-500 to-purple-700 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="pt-6 max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 pr-2 pt-8">
          <button className="btn bg-linear-to-r from-orange-400 to-pink-400 text-white font-normal">Explore Technologies</button>
          <button className="btn font-light">Learn more</button>
        </div>
      </div>
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
