import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB, addToWishlist } from "../../Utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);
  // const data = useLoaderData();
  const [singleBook, setSingleBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the books JSON
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((book) => Number(book.bookId) === bookId);
        setSingleBook(foundBook || null);
      })
      .catch((err) => console.error("Error fetching book data:", err))
      .finally(() => setLoading(false));
  }, [bookId]);

  const handleMarkRead = (bookId) => {
    // check if already in localStorage
    const stored = JSON.parse(localStorage.getItem("readList")) || [];
    const alreadyAdded = stored.map(Number).includes(Number(bookId));

    if (!alreadyAdded) {
      addToStoredDB(bookId);
      MySwal.fire({
        title: "Successfully Read!",
        icon: "success",
        draggable: true,
      });
    } else {
      MySwal.fire({
        title: "Already in Wishlist!",
        icon: "warning",
      });
    }
  };
  // ========== WISHLIST BUTTON ==========
  const handleWishlist = (bookId) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyAdded = stored.map(Number).includes(Number(bookId));

    if (!alreadyAdded) {
      addToWishlist(bookId);
      MySwal.fire({
        title: "Added to Wishlist!",
        icon: "success",
      });
    } else {
      MySwal.fire({
        title: "Already in Wishlist!",
        icon: "warning",
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center mb-10">
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (!singleBook) {
    return <h2 className="text-center text-red-500 mt-10">Book not found</h2>;
  }
  const {
    image,
    bookName,
    author,
    review,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = singleBook;
  return (
    <div>
      <div className="flex flex-col md:flex-row my-6 sm:my-7 md:my-10 lg:my-[50px] gap-6 sm:gap-8 md:10 lg:gap-12">
        <div className="w-full flex justify-center items-center md:w-1/2 p-10 lg:p-[74px] bg-[#131313]/5 rounded-2xl">
          <figure className="w-full max-w-[350px] md:max-w-[425px] h-auto md:h-[564px]">
            <img
              src={image}
              alt="Movie"
              className="w-full h-full object-cover rounded-xl shadow-sm"
            />
          </figure>
        </div>

        <div className=" w-full md:w-1/2">
          <h2 className="card-title">{bookName}</h2>
          <h3 className="my-2 md:my-3 lg:my-4">By {author}</h3>
          <h4 className="text-xl font-medium">{category}</h4>
          <p className="my-2 md:my-3 lg:my-4">
            <strong>Review:</strong> {review}
          </p>
          <div className="flex gap-6 items-center mb-2 md:mb-4">
            Tag
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-soft btn-accent text-green-500 hover:text-white"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[200px_auto] gap-y-1 md:gap-y-3">
            <span>Number of Pages :</span>
            <strong>{totalPages}</strong>

            <span>Publisher :</span>
            <strong>{publisher}</strong>

            <span>Year of Publishing :</span>
            <strong>{yearOfPublishing}</strong>

            <span>Rating :</span>
            <strong>{rating}</strong>
          </div>

          <div className="card-actions mt-4 md:mt-6 lg:mt-8 flex gap-6">
            <button
              onClick={() => handleMarkRead(bookId)}
              className="btn  btn-active text-white font-semibold
                  bg-[#50B1C9] md:px-6 px-5 lg:px-[33px] md:py-6 py-5 lg:py-7
                  rounded-lg
                  transition
                  border border-transparent
                  hover:bg-transparent
                  hover:border-[#000000]
                  hover:text-[#000000] text-[18px]"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlist(bookId)}
              className="btn  btn-active text-white font-semibold
                  bg-[#50B1C9] md:px-6 px-5 lg:px-[33px] md:py-6 py-5 lg:py-7
                  rounded-lg
                  transition
                  border border-transparent
                  hover:bg-transparent
                  hover:border-[#000000]
                  hover:text-[#000000] text-[18px]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
