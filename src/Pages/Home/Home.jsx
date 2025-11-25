import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../Books/Books";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [bookDatas, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
    <Books bookData={bookDatas} />
    </div>
  );
};

export default Home;
