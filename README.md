# 📚 Book Vibe — Book Review & Reading List Platform

![Book Vibe Banner](https://i.ibb.co/SDhzwcTY/Screenshot-934.png)

## 📖 Project Overview
**Book Vibe** is a modern, interactive book discovery and reading list management web application built with React. Users can explore curated books, inspect detailed reviews, tags, and ratings, organize books into "Read" and "Wishlist" collections, sort books dynamically by rating or page count, and visualize reading statistics through custom charts.

🔗 **Live Demo:** [Visit Book Vibe](https://react-book-vibe.vercel.app/)  

---

## 🛠️ Main Technologies Used

| Layer | Technologies |
| :--- | :--- |
| **Frontend Library** | React.js |
| **Routing** | React Router DOM |
| **Styling & UI** | Tailwind CSS, DaisyUI |
| **Data Visualization** | Recharts |
| **State & Storage** | Browser LocalStorage API |
| **Notifications** | React Toastify |

### 💡 Why These Technologies Were Chosen
- **React.js & React Router DOM:** Enables fast single-page application (SPA) navigation with dynamic route parameters (`/book/:bookId`) and clean nested layouts.
- **Tailwind CSS & DaisyUI:** Accelerates responsive UI development with clean typography, card layouts, and tab components.
- **Recharts:** Used to build a custom-shaped bar chart on the "Pages to Read" page for clear visual comparison of book lengths.
- **LocalStorage API:** Persists users' "Read Books" and "Wishlist" selections across browser reloads without requiring a backend database.

---

## ✨ Key Features
- 📖 **Curated Book Catalog & Details:** Browse books with cover images, author details, categories, tags, and comprehensive reviews on dedicated detail pages.
- 🔖 **Read List & Wishlist Management:** Add books to either the **Read** list or **Wishlist** with duplicate-entry validation and instant toast notifications.
- 🔄 **Smart Business Logic:** Automatically prevents adding an already-read book back into the Wishlist, while allowing Wishlist books to be moved to the Read list.
- 🔃 **Dynamic Sorting & Filtering:** Sort listed books in descending order by **Rating**, **Number of Pages**, or **Published Year**.
- 📊 **Interactive Reading Chart:** Visualizes all books in the user's Read list using a custom Recharts bar chart comparing total page counts.
- 📱 **Fully Responsive Design:** Seamlessly adapts to mobile, tablet, and desktop viewports.

---

## 📦 Key Dependencies
- `react` & `react-dom` — Core UI library
- `react-router-dom` — Client-side routing and dynamic URL parameters
- `recharts` — Composable charting library for visualizing reading data
- `react-toastify` — Clean toast alerts for user actions
- `react-icons` — Scalable vector icons for ratings, tags, and metadata
- `tailwindcss` & `daisyui` — Utility-first CSS styling and UI components

---

## 🧩 Challenges Faced & Solutions

1. **Synchronizing State Between Read List and Wishlist in LocalStorage:**
   - *Challenge:* Users could accidentally add the same book to both lists or re-add a finished book to the Wishlist, causing inconsistent UI states.
   - *Solution:* Created a dedicated LocalStorage utility module with validation checks that verify existing IDs before saving and trigger informative toast warnings whenever a rule is violated.

2. **Custom Shape Bar Chart Rendering in Recharts:**
   - *Challenge:* Rendering a custom triangular/curved bar path dynamically based on varying book page counts while keeping the chart responsive on mobile screens.
   - *Solution:* Wrapped the `BarChart` inside Recharts' `ResponsiveContainer` and wrote a custom SVG path generator function (`getPath`) mapped to dynamic `x`, `y`, `width`, and `height` props.
