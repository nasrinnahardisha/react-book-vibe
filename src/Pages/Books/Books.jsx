// import React, { Suspense } from "react";
// import Book from "../Book/Book";

// const Books = ({ bookData }) => {
  
//   // const [allBooks, setAllBooks] = useState([ ]);

//   // useEffect(() => {
//   //     fetch("booksData.json")
//   //         .then(res => res.json())
//   //         .then(data => {
//   //             setAllBooks(data);
//   //             console.log(data);
//   //         },[])
//   // })

//   // const bookPromise = fetch('booksData.json').then(res => res.json());

//   return (
//     <div className="md:mb-20 mb-12 sm:mb-16 lg:mb-24">
//       <h2 className="text-center text-[40px] font-bold mb-4 md:mb-9">Books</h2>
//       <Suspense
//         fallback={<span className="loading loading-spinner text-warning"></span>}
//       >
//         {/* <Book bookPromise={bookPromise}></Book> */}
//         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bookData.map((book) => (
//             <Book book={book} key={book.bookId}></Book>
//           ))}
//         </div>
//       </Suspense>
//     </div>
//   );
// };

// export default Books;




import React from "react";
import Book from "../Book/Book";

const Books = ({ bookData }) => {

  // loading condition: যদি bookData না আসে বা empty হয়
  const isLoading = !bookData || bookData.length === 0;

  return (
    <div className="md:mb-20 mb-12 sm:mb-16 lg:mb-24">
      <h2 className="text-center text-[40px] font-bold mb-4 md:mb-9">Books</h2>

      {isLoading ? (
        <div className="flex justify-center my-10">
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-success"></span>
              <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookData.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
