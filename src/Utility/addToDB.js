const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    console.log("hello");
    alert("all ready this id added");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};
// Get wishlist data from localStorage
const getWishlist = () => {
  const storedWishlistStr = localStorage.getItem("wishlist");
  
  if (storedWishlistStr) {
    return JSON.parse(storedWishlistStr);
  } else {
    return [];
  }
};

// Add a book to wishlist
const addToWishlist = (id) => {
  const wishlistData = getWishlist();

  if (wishlistData.includes(id)) {
    console.log("Already in wishlist");
    alert("This book is already in your wishlist!");
  } else {
    wishlistData.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
    console.log("Added to wishlist");
  }
};

export { addToStoredDB, getStoredBook, getWishlist, addToWishlist };
