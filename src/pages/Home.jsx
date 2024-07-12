import { Link } from "react-router-dom";
import WomanImg from "../img/home/woman.png";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
        <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col  justify-center items-center lg:items-start lg:top-36 lg:left-32">
          <h1 className="h1">
            photographer <br /> & film maker
          </h1>
          <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">Buenos Aires, Argentina</p>
          <Link className="btn mb-[30px]" to={'/contact'}>hire me</Link>
        </div>
          {/* image */}
        <div className="flex justify-end max-h-96 lg:max-h-max">
          <div className="relative lg:-right-16 overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
