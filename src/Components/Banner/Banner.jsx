import React from "react";
import bookImage from "../../assets/books.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-6 md:py-8 lg:py-12 xl:py-20 my-6 sm:my-8 md:my-10 lg:my-[60px] xl:my-[78px]">
        <div className="hero-content flex-col lg:flex-row-reverse px-12 md:px-20 lg:px-[120px] gap-[30px] md:gap-10 lg:gap-[60px] xl:gap-[86px]">
          <figure className="w-full max-w-[350px] md:max-w-[320px] h-auto md:h-[394px] mx-auto">
            <img
              src={bookImage}
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>

          <div className="text-center lg:text-start">
            <h1 className="font-bold text-[56px] leading-[84px] text-[#131313]">
              Books to freshen up your bookshelf
            </h1>
             <Link
            to="/listedBooks"
            className="
				text-white font-semibold
				bg-[#23BE0A]
				px-[35px] py-4
				rounded-lg
				transition
				hover:bg-[#59C6D2]
				inline-block mt-5 md:mt-8 lg:mt-10 xl:mt-12
    "
          >
            View The List
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
