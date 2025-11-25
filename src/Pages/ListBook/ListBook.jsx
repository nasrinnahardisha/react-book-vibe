import { Link } from "react-router";
import { FaUserFriends } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";

const ListBook = ({ book }) => {
  const { 
    bookId,
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    publisher,
    totalPages,
    yearOfPublishing
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="w-full border border-[#F3F3F3] rounded-2xl p-6 bg-white hover:shadow-md transition-all">
        
        {/* MAIN WRAPPER FLEX */}
        <div className="flex md:flex-row flex-col gap-6">
          
          {/* LEFT IMAGE BOX */}
          <div className="rounded-2xl bg-[#F3F3F3] flex justify-center items-center px-12 py-7">
            <figure className="w-full  md:w-[130px] h-[300px] sm:h-[350px] md:h-[172px]">
              <img
                src={image}
                alt={bookName}
                className="w-full h-full object-cover rounded-md"
              />
            </figure>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 space-y-4 md:space-y-6">
            {/* TITLE */}
            <h3 className="bookList_title text-[#131313]">
              {bookName}
            </h3>

            {/* AUTHOR */}
            <h4 className="text-[15px] text-[#131313]/70">
              By : <span className="font-medium">{author}</span>
            </h4>

            {/* TAGS */}
            <div className="flex gap-4 flex-wrap mb-4">
                <strong>Tags</strong>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3  rounded-xl bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
              <div className="flex gap-3 items-center"><IoLocationOutline className="text-2xl" /><h4>Year of Publishing: {yearOfPublishing}</h4></div>
            </div>

            {/* META INFO */}
            <div className="flex flex-wrap gap-6 text-[16px] text-[#131313]/60 font-medium">
              <span className="flex gap-4 items-center"><FaUserFriends /> Publisher: {publisher}</span>
              <span className="flex gap-4 items-center"><RiPagesLine /> Page: {totalPages}</span>
            </div>

            {/* DASHED LINE */}
            <div className="border-b border-[#E5E7EB] my-4" />

            {/* CATEGORY + RATING */}
            <div className="flex gap-4 items-center flex-wrap">
              <Link className="text-[16px] font-medium bg-[#328EFF]/15 text-[#328EFF] px-3  md:px-5 py-2 rounded-[30px] transition duration-300
             hover:bg-[#328EFF]/25">
                Category: {category}
              </Link>
              <Link className="text-[16px] font-medium bg-[#FFAC33]/15 text-[#FFAC33] px-3  md:px-5 py-2 rounded-[30px] transition duration-300
             hover:bg-[#FFAC33]/25">
                Rating: {rating}
              </Link>
              <Link to={`/bookDetails/${bookId}`} className="btn rounded-[30px] px-3  md:px-5 py-2 md:py-6 m-1 bg-[#23BE0A] text-white md:text-[18px] text-[16px] font-medium transition duration-300
             hover:bg-[#1a9707]">View Details</Link>

              <span className="flex items-center gap-2 text-[#131313]/80 font-medium">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListBook;
