import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookId,image, bookName, author, rating, category, tags } = book;
  // const book = use(bookPromise);
//   console.log(book);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card w-full bg-base-100  border border-[#F3F3F3] rounded-2xl md:p-6 p-4 flex flex-col h-full">
        <div className="rounded-2xl flex justify-center items-center bg-base-200 py-4 md:py-6 lg:my-8">
          <figure className="w-[131px] h-[166px] flex justify-center items-center">
            <img src={image} alt={bookName} className="rounded-md h-full object-cover" />
          </figure>
        </div>

        <div className="flex justify-between items-center mt-4 md:mt-6">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn rounded-[22px] btn-soft btn-accent text-[#23BE0A] hover:text-white"
            >
              {tag}
            </button>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-4">{bookName}</h3>

        <h4 className="text-[16px] font-medium text-[#131313]/80  my-5">By {author}</h4>

        <div className="border-b border-dashed mb-3"></div>

        <div className="flex justify-between items-center  mt-auto pt-2 font-medium text-[#131313]/80">
          <button className="">{category}</button>
          <span className="flex items-center text-[16px] font-medium gap-3 "> {rating} <FaRegStar  className="w-5 h-5"/></span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
