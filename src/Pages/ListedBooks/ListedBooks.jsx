
import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getWishlist } from "../../Utility/addToDB";
import { IoIosArrowDown } from "react-icons/io";
import ListBook from "../ListBook/ListBook";

const ListedBooks = () => {
  const [bookList, setBookList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  // const data = useLoaderData();
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
        // console.log(data);
        const storedBookData = getStoredBook();
        const convertStoredBooks = storedBookData.map((id) => parseInt(id));
        const myReadList = data.filter((book) =>
          convertStoredBooks.includes(book.bookId)
        );

        // WISHLIST
        const storedWish = getWishlist().map(Number);
        const myWish = data.filter((book) => storedWish.includes(book.bookId));
        setBookList(myReadList);
        setWishList(myWish);
        setLoading(false);
      });
  }, []);

  //   console.log(data);

  // useEffect(() => {
  //   const storedBookData = getStoredBook();
  //   const convertStoredBooks = storedBookData.map((id) => parseInt(id));
  //   const myReadList = data.filter((book) =>
  //     convertStoredBooks.includes(book.bookId)
  //   );
  //   setBookList(myReadList);
  // }, [data]);

  const handleSort = (type) => {
    setSort(type);

    let sorted = [...bookList];
    let sortedWish = [...wishList];

    // | pages          | কম পৃষ্ঠা → বেশি পৃষ্ঠা
    // | rating         | বেশি রেটিং → কম রেটিং
    // | publisher year | পুরোনো → নতুন

    if (type === "pages") {
      sorted.sort((a, b) => a.totalPages - b.totalPages);
      sortedWish.sort((a, b) => a.totalPages - b.totalPages);
    }

    if (type === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
      sortedWish.sort((a, b) => b.rating - a.rating);
    }

    if (type === "publisher year") {
      sorted.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      sortedWish.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    setBookList(sorted);
    setWishList(sortedWish);
  };

  return (
    <div>
      <div className="rounded-2xl bg-base-200 my-6 md:my-9 py-4 sm:py-6 md:py-8 text-center">
        <h2>Books</h2>
      </div>
      <div className="flex justify-center ">
        <details className="dropdown mb-20 ">
          <summary className="btn rounded-2 w-70 px-5 py-6 m-1 bg-[#23BE0A] text-white text-[18px] font-semibold">
            Sort by <IoIosArrowDown className="ml-4" /> {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-70 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Number Of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("publisher year")}>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs className="mb-16">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <h3 className="my-4">Read Books : {bookList.length}</h3>
          {loading ? (
            // 🔥 শুধু Read Books এর লিস্ট লোডিং হবে
            <div className="flex justify-center items-center h-[150px]">
              <span className="loading loading-spinner text-warning"></span>
              <span className="loading loading-spinner text-info"></span>
              <span className="loading loading-spinner text-success"></span>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {bookList.map((book) => (
                <ListBook key={book.bookId} book={book}></ListBook>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3 className="my-4">WishList Books : {wishList.length}</h3>
          {wishList.map((book) => (
            <ListBook key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
